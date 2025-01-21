import React, { useState } from "react";

const NewTaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    status: "",
    active: false,
    link: "",
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [timeToFinish, setTimeToFinish] = useState("00:00");
  const [link, setLink] = useState("");

  const handleChange = (event) => {
    const inputToChange = event.target.id;
    const value = event.target.value;

    switch (inputToChange) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "dueDate":
        setDueDate(value);
        break;
      case "priority":
        setPriority(value);
        break;
      case "timeToFinish":
        setTimeToFinish(value);
        break;
      case "link":
        setLink(value);
        break;
      default:
        console.warn(`Unhandled input: ${inputToChange}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      status: "standby",
      active: false,
      link: link,
    };

    setFormData(newTask);

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("");
    setTimeToFinish("");
    setLink("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md shadow-md text-[#FFFFFF]"
    >
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
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
          value={description}
          onChange={handleChange}
          className="text-black mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={dueDate}
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
          value={priority}
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
          How many hours to finish?
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
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="time"
            id="timeToFinish"
            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="00:00"
            value={timeToFinish}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          link
        </label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
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
