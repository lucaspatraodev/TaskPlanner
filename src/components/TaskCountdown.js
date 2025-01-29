import { useState, useEffect } from "react";

const TaskCountdown = ({ task }) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const [timeLeft, setTimeLeft] = useState(task.timeToFinish * 60);

  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    if (!isTimerRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        const { hours, minutes, seconds } = formatTime(newTime);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1>Task title:</h1>
      <div className="flex rounded-xl items-center justify-center w-max mx-auto p-3 gap-2 bg-indigo-50">
        <div className="rounded-xl py-2 flex items-center justify-center flex-col aspect-square px-1 w-20">
          <h3
            className="countdown-element days font-manrope font-semibold text-xl
            text-indigo-600 text-center"
          >
            2
          </h3>
          <p
            className="text-lg font-Cormorant font-normal text-indigo-600
            text-center w-full"
          >
            Hours
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
            10
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
            50
          </h3>
          <p
            className="text-lg font-Cormorant font-normal text-indigo-600
            text-center w-full"
          >
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCountdown;
