import { motion } from "motion/react";
import React, { useState } from "react";
import Link from "next/link";
import CardFooter from "./Card/CardFooter";
import { useTaskContext } from "@/context/TaskContext";

export const Card = ({ task }) => {
  const { highlightTask } = useTaskContext();
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleClick = () => {
    setIsCardSelected(!isCardSelected);
    highlightTask(task);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${
        isCardSelected ? "border-4 border-red-500" : ""
      } w-[230px] h-[270px] flex flex-col justify-between bg-[#363636] border-t-4 border-t-blue-600 shadow-sm rounded-xl`}
    >
      <div className="h-[77%] w-full p-4">
        <h3 className="text-lg font-bold text-white">{task.title}</h3>
        <p className="text-xs mt-2 text-white">{task.description}</p>
        <p className="text-xs mt-2 text-white">Due date: {task.dueDate}</p>
        <p className="text-xs mt-2 text-white">priority: {task.priority}</p>
        <p className="text-xs mt-2 text-white">status: {task.status}</p>

        <Link
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href={`http://localhost:3000/tasks/${task.id}`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="no-underline">Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 ml-1.5"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>

        <Link
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href={`http://localhost:3000/edit/${task.id}`}
          onClick={(event) => event.stopPropagation()}
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
        </Link>
      </div>
      <CardFooter creationDay={14} creationMonth={1} />
    </motion.div>
  );
};
