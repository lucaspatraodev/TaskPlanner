import React, { useEffect, useState } from "react";

import { useTaskContext } from "@/context/TaskContext";
import { Card } from "../Card/Card";

const TaskBoard = () => {
  const { taskList } = useTaskContext();

  useEffect(() => {}, [taskList]);

  // bg-[#262626]
  return (
    <section className="w-[97%] h-[60%] mx-auto bg-[#292929] rounded-xl overflow-y-auto no-scrollbar p-4">
      <div className="grid grid-cols-4 justify-items-center w-full">
        {taskList.map((task) => {
          return <Card key={task.id} task={task} />;
        })}
      </div>
    </section>
  );
};

export default TaskBoard;
