import React from "react";
import DoneTaskItem from "./DoneTaskItem";

const DoneTaskSection = () => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Done Tasks
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="flex flex-col gap-2">
          <DoneTaskItem />
          <DoneTaskItem />
        </ul>
      </div>
    </div>
  );
};

export default DoneTaskSection;
