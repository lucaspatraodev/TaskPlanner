import { useState, useEffect } from "react";

const TaskCountdown = ({ task }) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(task.timeToFinish * 60);

  const [minutes, setMinutes] = useState(Math.floor(timeLeft / 60));
  const [seconds, setSeconds] = useState(timeLeft % 60);

  const formatTime = (timeToFinish) => {
    const minutes = Math.floor(timeToFinish / 60);
    const seconds = timeToFinish % 60;
    return {
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  useEffect(() => {
    if (!isTimerRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      // 61 * 60 = 3660
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        const { minutes, seconds } = formatTime(newTime);
        setMinutes(minutes);
        setSeconds(seconds);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    console.log(
      "Task changed, last task paused with: ",
      Math.floor(timeLeft / 60) + "minutes and " + (timeLeft % 60) + " seconds"
    );
    setTimeLeft(task.timeToFinish * 60);
    setIsTimerRunning(false);
    const { minutes, seconds } = formatTime(task.timeToFinish * 60);
    setMinutes(minutes);
    setSeconds(seconds);
  }, [task]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Task title: {task.title}</h1>
      <div className="flex rounded-xl items-center justify-center w-max mx-auto p-3 gap-2 bg-indigo-50">
        <div className="rounded-xl py-2 flex items-center justify-center flex-col aspect-square px-1 w-20">
          <h3
            className="countdown-element days font-manrope font-semibold text-xl
            text-indigo-600 text-center"
          >
            {minutes}
          </h3>
          <p
            className="text-lg font-Cormorant font-normal text-indigo-600
            text-center w-full"
          >
            Minutes
          </p>
        </div>
        <span className="font-manrope font-semibold text-2xl text-indigo-600">
          :
        </span>
        <div className="rounded-xl py-2 flex items-center justify-center flex-col aspect-square px-1 w-20">
          <h3
            className="countdown-element days font-manrope font-semibold text-xl
            text-indigo-600 text-center"
          >
            {seconds}
          </h3>
          <p
            className="text-lg font-Cormorant font-normal text-indigo-600
            text-center w-full"
          >
            Seconds
          </p>
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
        onClick={startTimer}
      >
        Start Timer
      </button>
    </div>
  );
};

export default TaskCountdown;
