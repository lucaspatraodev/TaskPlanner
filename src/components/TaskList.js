import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { useTaskContext } from "@/context/TaskContext";

const TaskList = () => {
  const [actualBoardStatus, setActualBoardStatus] = useState("standby");
  const { taskList } = useTaskContext();

  useEffect(() => {}, [taskList]);

  return (
    <section className="h-full w-full bg-[#454545] rounded-md">
      <div className="grid grid-cols-5 gap-8 w-full h-[94%] overflow-y-auto no-scrollbar  p-4">
        {taskList
          .filter((task) => task.status === actualBoardStatus)
          .map((task) => {
            return <Card key={task.id} task={task} />;
          })}
      </div>
      <div className="flex flex-col justify-center w-full h-[6%]">
        <div className="grid w-[350px] grid-cols-2 gap-1 p-[4.5px] m-auto bg-[#FFDC5D] rounded-lg">
          <button
            type="button"
            className="px-5 py-1.5 text-xs font-medium text-white bg-black hover:bg-gray-200 hover:text-black rounded-lg"
            onClick={() => {
              setActualBoardStatus("standby");
            }}
          >
            StandBy
          </button>
          <button
            type="button"
            className="px-5 py-1.5 text-xs font-medium text-white bg-black hover:bg-gray-200 hover:text-black rounded-lg"
            onClick={() => {
              setActualBoardStatus("done");
            }}
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
