import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTaskContext } from "@/context/TaskContext";
import EditTaskCard from "../EditTaskCard";

export const Card = ({ task }) => {
  const [taskData, setTaskData] = useState(task);
  const { setHasHighlightedTask, setHighlightedTask, highlightedTask } =
    useTaskContext();
  const [isCardEditing, setIsCardEditing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const resData = await fetch(
        `http://localhost:3001/api/tasks/${taskData.id}`
      );
      const data = await resData.json();
      return data;
    }

    fetchData().then((data) => {
      setTaskData(data);
    });
  }, [isCardEditing]);

  const handleClick = () => {
    if (highlightedTask === taskData) {
      setHasHighlightedTask(false);
      setHighlightedTask("");
      return;
    }

    setHighlightedTask(taskData);
    setHasHighlightedTask(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${
          highlightedTask.id === task.id ? "border-4 border-red-500" : ""
        } w-[280px] h-[260px] bg-[#363636] border-t-4 border-t-blue-600 shadow-sm rounded-xl`}
      >
        {isCardEditing ? (
          <EditTaskCard
            task={taskData}
            handleGoingBack={() => {
              setIsCardEditing(false);
            }}
          />
        ) : (
          <div
            className="h-[98%] w-full p-4 flex flex-col justify-between"
            onClick={handleClick}
          >
            <h3 className="text-[20px] font-bold text-white">
              {taskData.title}
            </h3>
            <p className="text-[13px] mt-2 text-white">
              <Image
                width={13}
                height={13}
                src="/flagIcon.svg"
                alt="Flag Icon"
                className="inline-block mr-1"
              />
              Due{" "}
              {new Date(taskData.dueDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
              })}
            </p>
            <p className="text-[16px] mt-2 text-white">
              {taskData.description}
            </p>

            <div>
              <div className="flex justify-between text-[12px] mt-2 text-white">
                <span>Task progress</span>
                <span>32%</span>
              </div>

              <div className="w-full h-2 bg-[#454545] rounded-lg mt-1">
                <div className="h-full w-[32%] rounded-lg bg-green-500"></div>
              </div>
            </div>

            <div className="flex justify-around">
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
              <button
                className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCardEditing(true);
                }}
              >
                Delete task
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
          </div>
        )}
      </motion.div>
    </>
  );
};
