import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useTaskContext } from "@/context/TaskContext";
import EditTaskCard from "./EditTaskCard";

export const Card = ({ task }) => {
  const { setHasHighlightedTask, setHighlightedTask, highlightedTask } =
    useTaskContext();
  const [isCardEditing, setIsCardEditing] = useState(false);

  const handleClick = () => {
    if (highlightedTask === task) {
      setHasHighlightedTask(false);
      setHighlightedTask("");
      return;
    }

    setHighlightedTask(task);
    setHasHighlightedTask(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${
          highlightedTask === task ? "border-4 border-red-500" : ""
        } w-[230px] h-[270px] flex flex-col justify-between bg-[#363636] border-t-4 border-t-blue-600 shadow-sm rounded-xl`}
      >
        {isCardEditing ? (
          <EditTaskCard
            task={task}
            handleGoingBack={() => {
              setIsCardEditing(false);
            }}
          />
        ) : (
          <div className="h-[98%] w-full p-4" onClick={handleClick}>
            <h3 className="text-lg font-bold text-white">{task.title}</h3>
            <p className="text-xs mt-2 text-white">{task.description}</p>
            <p className="text-xs mt-2 text-white">Due date: {task.dueDate}</p>
            <p className="text-xs mt-2 text-white">priority: {task.priority}</p>
            <p className="text-xs mt-2 text-white">status: {task.status}</p>

            <button
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsCardEditing(true);
              }}
            >
              Edit task
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};
