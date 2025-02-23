import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";
import TaskTimerAnimation from "./TaskTimerAnimation";

const TaskCountdown = ({ task }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [shortPauseDuration, setShortPauseDuration] = useState(1);
  const [longPauseDuration, setLongPauseDuration] = useState(1);
  const [LongBreakInterval, setLongBreakInterval] = useState(2);

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [timeLeft, setTimeLeft] = useState(
    task.pomodoroStructure[0].duration * 60
  );
  const [minutes, setMinutes] = useState(
    String(Math.floor(timeLeft / 60)).padStart(2, "0")
  );
  const [seconds, setSeconds] = useState(
    String(timeLeft % 60).padStart(2, "0")
  );

  const intervalRef = useRef(null);

  const [boardActualType, setBoardActualType] = useState("pomodoro");
  const [boardColor, setBoardColor] = useState("");

  useEffect(
    function handleColorChange() {
      if (boardActualType === "pomodoro") {
        setBoardColor("bg-red-700 text-white");
      } else if (boardActualType === "short-break") {
        setTimeLeft(shortPauseDuration * 60);
        setBoardColor("bg-yellow-700");
      } else if (boardActualType === "long-break") {
        setTimeLeft(longPauseDuration * 60);
        setBoardColor("bg-blue-700");
      } else if (boardActualType === "done") {
        setTimeLeft(0);
        setBoardColor("bg-green-700");
      }
    },
    [boardActualType]
  );

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        const newMinutes = String(Math.floor(newTime / 60)).padStart(2, "0");
        const newSeconds = String(newTime % 60).padStart(2, "0");
        setMinutes(newMinutes);
        setSeconds(newSeconds);

        if (newTime === 0) {
          clearInterval(intervalRef.current);
          setIsTimerRunning(false);
          goToNextStep();
        }
        return newTime;
      });
    }, 1000);

    setIsTimerRunning(true);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsTimerRunning(false);
    }
  };

  const goToNextStep = async () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsTimerRunning(false);

    const updateTask = async (pomodoroID, isTaskFinished) => {
      await axios
        .patch(`http://localhost:3001/tasks/pomodoro/${task._id}`, {
          pomodoroID: pomodoroID,
          isTaskFinished: isTaskFinished,
        })
        .then(() => {
          alert("Task updated!");
        })
        .catch((err) => console.log(err?.response));
    };

    const setNewTime = (time) => {
      const newMinutes = String(Math.floor(time / 60)).padStart(2, "0");
      const newSeconds = String(time % 60).padStart(2, "0");

      setMinutes(newMinutes);
      setSeconds(newSeconds);

      setTimeLeft(time);
    };

    const getPomoTask = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/tasks/pomodoro/${task._id}`
        );
        const pomoTask = response.data;
        return pomoTask;
      } catch (error) {
        console.error("Error fetching Pomodoro task:", error);
        throw error;
      }
    };

    const getNextStepData = async () => {
      const task = await getPomoTask();

      const undoneSteps = task.pomodoroStructure.filter(
        (step) => step.status === 1
      );

      const doneSteps = task.pomodoroStructure.filter(
        (step) => step.status === 2
      );

      const stepWithLowestOrder = undoneSteps[0];

      return {
        undoneSteps: undoneSteps,
        doneSteps: doneSteps,
        stepWithLowestOrder: stepWithLowestOrder,
      };
    };

    if (boardActualType === "pomodoro") {
      await updateTask(currentStep, false);
      setCurrentStep(currentStep + 1);

      const { stepWithLowestOrder, doneSteps } = await getNextStepData();
      console.log(stepWithLowestOrder);

      if (!stepWithLowestOrder) {
        await updateTask(1, true);
        console.log("no order");

        setBoardActualType("done");

        return;
      }

      if (doneSteps.length % LongBreakInterval === 0) {
        setNewTime(longPauseDuration * 60);

        setBoardActualType("long-break");
        return;
      } else {
        setNewTime(shortPauseDuration * 60);

        setBoardActualType("short-break");
      }
    }

    if (boardActualType === "short-break") {
      const { stepWithLowestOrder } = await getNextStepData();
      setTimeLeft(stepWithLowestOrder.duration * 60);
      setNewTime(stepWithLowestOrder.duration * 60);
      setBoardActualType("pomodoro");
      return;
    }

    if (boardActualType === "long-break") {
      const { stepWithLowestOrder } = await getNextStepData();
      setTimeLeft(stepWithLowestOrder.duration * 60);
      setNewTime(stepWithLowestOrder.duration * 60);
      setBoardActualType("pomodoro");
      return;
    }
  };

  const handleTimerChange = () => {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className={`w-full h-full`}>
      {boardActualType === "done" ? (
        <div>Task finished</div>
      ) : (
        <div className="w-full h-full flex items-center rounded-xl bg-[#292929]">
          <section className="w-1/2 h-full flex items-center">
            <div
              className={`w-full h-5/6 flex flex-col items-center justify-center rounded-xl ${boardColor}`}
            >
              <div className="w-auto flex justify-center items-center gap-2">
                <div className="rounded-xl flex items-center justify-center flex-col aspect-square px-1 w-20">
                  <h3
                    className="font-semibold text-xl
              text-white text-center"
                  >
                    {minutes}
                  </h3>
                  <p
                    className="text-md font-Cormorant font-normal text-white
              text-center w-full"
                  >
                    Minutes
                  </p>
                </div>
                <span className="font-manrope font-semibold text-2xl text-white">
                  :
                </span>
                <div className="rounded-xl flex items-center justify-center flex-col aspect-square px-1 w-20">
                  <h3
                    className="font-semibold text-xl
              text-white text-center"
                  >
                    {seconds}
                  </h3>
                  <p
                    className="text-lg font-Cormorant font-normal text-white
              text-center w-full"
                  >
                    Seconds
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="p-2 bg-indigo-600 text-white rounded-lg"
                  onClick={handleTimerChange}
                >
                  {isTimerRunning ? "Pause Timer" : "Start Timer"}
                </button>
              </div>
              <button
                className="p-2 bg-indigo-600 text-white rounded-lg"
                onClick={goToNextStep}
              >
                next step
              </button>
            </div>
          </section>
          <TaskTimerAnimation type={boardActualType} task={task} />
        </div>
      )}
    </div>
  );
};

export default TaskCountdown;
