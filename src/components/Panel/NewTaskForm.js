import React, { useState } from "react";
import { useTaskContext } from "@/context/TaskContext";
import { usePanel } from "@/context/PanelContext";

const SubTaskInput = ({ subTasks, setSubTasks }) => {
  const [subTask, setSubTask] = useState("");

  const handleAddSubTask = () => {
    if (subTask.trim() !== "") {
      setSubTasks([...subTasks, subTask]);
      setSubTask("");
    }
  };

  return (
    <div>
      <label htmlFor="subTask" className="block text-sm font-medium">
        Sub Task
      </label>
      <input
        id="subTask"
        type="text"
        value={subTask}
        onChange={(e) => setSubTask(e.target.value)}
        className="text-black mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button
        type="button"
        onClick={handleAddSubTask}
        className="mt-2 p-2 bg-green-500 rounded"
      >
        Add Sub Task
      </button>
      <ul className="mt-2">
        {subTasks.map((subtask, index) => (
          <li key={index} className="text-sm">
            {subtask}
          </li>
        ))}
      </ul>
    </div>
  );
};

const NewTaskForm = () => {
  const { createTask, reloadTasks } = useTaskContext();
  const { setActiveComponent } = usePanel();

  const DEFAULT_DATA = {
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    timeToFinish: "0",
    status: "standby",
    active: false,
    link: "",
  };

  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [subTasks, setSubTasks] = useState([]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(subTasks);
    const taskData = { ...formData, subTasks };

    await createTask(taskData);
    setFormData(DEFAULT_DATA);
    setSubTasks([]);
    await reloadTasks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md shadow-md text-[#FFFFFF]"
    >
      <div>
        <button
          className="p-2 bg-blue-500 rounded"
          onClick={() => setActiveComponent("")}
        >
          Go back
        </button>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="text-black mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="text-black mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <SubTaskInput subTasks={subTasks} setSubTasks={setSubTasks} />
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="text-black mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="priority" className="block text-sm font-medium">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="text-black mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="time"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          How many time to finish? (In minutes)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="time"
            type="number"
            name="timeToFinish"
            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="0"
            value={formData.timeToFinish}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="link" className="block text-sm font-medium">
          link
        </label>
        <input
          id="link"
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="text-black mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add task
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;
