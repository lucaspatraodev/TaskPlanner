const React = require("react");
import { motion } from "motion/react";

export const Card = ({
  title,
  description,
  dueDate,
  priority,
  status,
  active,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-[270px] h-[220px] flex flex-col bg-[#363636] border-t-4 border-t-blue-600 shadow-sm rounded-xl"
    >
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-xs mt-2 text-white">{description}</p>
        <p className="text-xs mt-2 text-white">Due date: {dueDate}</p>
        <p className="text-xs mt-2 text-white">priority: {priority}</p>
        <p className="text-xs mt-2 text-white">status: {status}</p>

        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
