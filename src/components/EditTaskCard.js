import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const EditTaskCard = ({ task, handleGoingBack }) => {
  const [taskData, setTaskData] = useState(task);

  useEffect(() => {
    console.log(taskData);
  }, [taskData]);

  const updateTask = async (e) => {
    console.log(taskData);
    e.preventDefault();

    await axios
      .patch(`/api/tasks`, taskData)
      .then(() => {
        alert("Task updated!");
      })
      .catch((err) => alert(err?.response?.data));
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setTaskData({ ...taskData, [inputName]: inputValue });
  };

  const handleGoBack = () => {
    handleGoingBack();
  };

  return (
    <motion.div
      className="w-full h-[95%] flex flex-col justify-between bg-[#363636] shadow-sm rounded-xl"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.1 }}
    >
      <form className="flex flex-col gap-4 items-center p-8 overflow-y-auto no-scrollbar w-full h-full">
        <button
          className="text-white bg-yellow-800 p-2 w-20"
          onClick={() => {
            handleGoBack();
          }}
        >
          Go back
        </button>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={taskData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={taskData.dueDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeToFinish">Time to Finish</label>
          <input
            id="timeToFinish"
            name="timeToFinish"
            type="number"
            value={taskData.timeToFinish}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={taskData.status}
            onChange={handleChange}
          >
            <option value="standby">Standby</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label htmlFor="link">Link</label>
          <input
            id="link"
            name="link"
            type="text"
            value={taskData.link}
            onChange={handleChange}
          />
        </div>
        <button
          className="text-white bg-yellow-800 p-2 w-32"
          onClick={async (e) => {
            await updateTask(e);
          }}
        >
          Update task
        </button>
      </form>
    </motion.div>
  );
};

export default EditTaskCard;
