import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { useTaskContext } from "@/context/TaskContext";

const TaskList = () => {
  const [actualBoardStatus, setActualBoardStatus] = useState("standby");
  const { taskList } = useTaskContext();

  useEffect(() => {}, [taskList]);

  return (
    <section className="h-full w-full bg-[#454545] rounded-md">
      <div className="grid grid-cols-4 gap-2 w-full max-h-screen overflow-y-auto no-scrollbar h-[90%] p-4">
        {taskList
          .filter((task) => task.status === actualBoardStatus)
          .map((task) => {
            return <Card key={task.id} task={task} />;
          })}
      </div>
      <div className="w-full bg-red-400 h-[10%]">
        <div className="grid w-[350px] grid-cols-2 gap-1 p-[4.5px] m-auto mt-2 bg-[#FFDC5D] rounded-xl">
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
