import { useTaskContext } from "@/context/TaskContext";
import React, { useState } from "react";
import TaskCountdown from "./TaskCountdown";

const Panel = ({ onFormOpen }) => {
  const { pomoHasHighlightedTask } = useTaskContext();
  const { pomoHighlightedTask } = useTaskContext();

  const pomoSteps = [
    {
      type: "pomodoro",
      duration: "20",
      order: 1,
    },
    {
      type: "short",
      duration: "10",
      order: 2,
    },
    {
      type: "pomodoro",
      duration: "20",
      order: 3,
    },
    {
      type: "long",
      duration: "15",
      order: 4,
    },
    {
      type: "pomodoro",
      duration: "20",
      order: 5,
    },
  ];

  return (
    <>
      {pomoHasHighlightedTask ? (
        <section className="w-[97%] h-[33%] mx-auto bg-[#292929] rounded-xl p-4">
          <TaskCountdown task={pomoHighlightedTask} />
        </section>
      ) : (
        <section className="w-[97%] h-[33%] mx-auto bg-[#292929] rounded-xl p-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={onFormOpen}
          >
            Create task
          </button>
        </section>
      )}
    </>
  );
};

export default Panel;
