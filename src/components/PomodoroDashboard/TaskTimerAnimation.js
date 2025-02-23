import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TaskTimerAnimation = ({ type, task }) => {
  useEffect(() => {}, [type]);
  // rounded-xl bg-[#292929] border-[4px] border-yellow-500
  return (
    <section className="w-1/2 h-full flex  text-white p-2">
      <div className="w-3/6 h-full p-4">
        <h1 className="font-semibold">Time to work, be focused!</h1>
        <div className="h-[35%]">
          <div className="flex justify-between text-[12px] mt-2 text-white">
            <span>Task progress</span>
            <span>32%</span>
          </div>

          <div className="w-full h-[7px] bg-[#454545] rounded-lg mt-1">
            <div className="h-full w-full rounded-lg bg-black">
              <div className="h-full w-[32%] rounded-lg bg-yellow-500"></div>
            </div>
          </div>
        </div>
        <h2>Task steps:</h2>
      </div>
      <div className="w-3/6 h-full flex flex-col items-center">
        <DotLottieReact
          src="https://lottie.host/da819ac6-5e52-4b4b-a2c0-29cf75d30c8b/Esd0Q7WCtR.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default TaskTimerAnimation;
