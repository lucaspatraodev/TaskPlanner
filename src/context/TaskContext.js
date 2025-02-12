"use client";
import axios from "axios";

import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children, initialTasks }) => {
  const [taskList, SetTaskList] = useState(initialTasks || []);

  const reloadTasks = async () => {
    try {
      axios.get("http://localhost:3001/api/tasks").then((res) => {
        SetTaskList(res.data);
      });
    } catch (error) {
      console.error("Error trying to GET tasks: ", error);
    }
  };

  // TASK HIGHLIGHT

  const [hasHighlightedTask, setHasHighlightedTask] = useState(false);
  const [highlightedTask, setHighlightedTask] = useState("");

  // TASK CREATION

  const createTask = async (newTask) => {
    await axios
      .post("/api/tasks", newTask)
      .then(() => {})
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <TaskContext.Provider
      value={{
        hasHighlightedTask,
        setHasHighlightedTask,
        highlightedTask,
        setHighlightedTask,
        createTask,
        reloadTasks,
        taskList,
        SetTaskList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error(
      "useTaskHighlight deve ser usado dentro de TaskHighlightProvider"
    );
  }
  return context;
};
