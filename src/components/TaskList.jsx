import React, { useEffect, useState } from "react";
import { Card } from "./Card";

const TaskList = ({ tasks }) => {
  const [actualBoardStatus, setActualBoardStatus] = useState("standby");

  useEffect(() => {}, [tasks]);

  return (
    <>
      <div className="grid grid-cols-4 gap-2 w-fullmax-h-screen overflow-y-auto no-scrollbar h-[90%] p-4">
        {tasks
          .filter((task) => task.status === actualBoardStatus)
          .map((task) => {
            return (
              <Card
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                priority={task.priority}
                status={task.status}
                active={task.active}
              />
            );
          })}
      </div>
      <div className="w-full h-[10%]">
        <div
          className="grid max-w-xs grid-cols-2 gap-1 p-[4.5px] mx-auto mt-4 bg-[#FFDC5D] rounded-xl"
          role="group"
        >
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
    </>
  );
};

export default TaskList;
