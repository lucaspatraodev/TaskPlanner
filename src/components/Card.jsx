const React = require("react");
import { motion } from "motion/react";
import Link from "next/link";
import CardFooter from "./Card/CardFooter";

export const Card = ({ title, description, dueDate, priority, status, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-[260px] h-[270px] flex flex-col justify-between bg-[#363636] border-t-4 border-t-blue-600 shadow-sm rounded-xl"
    >
      <div className="h-[77%] w-full p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-xs mt-2 text-white">{description}</p>
        <p className="text-xs mt-2 text-white">Due date: {dueDate}</p>
        <p className="text-xs mt-2 text-white">priority: {priority}</p>
        <p className="text-xs mt-2 text-white">status: {status}</p>

        <Link
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href={`http://localhost:3000/tasks/${id}`}
        >
          Card link
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
