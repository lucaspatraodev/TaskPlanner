import React from "react";
import NewTaskForm from "./NewTaskForm";

const TaskHighlight = ({ onTaskCreated }) => {
  const handleTaskCreation = (newTask) => {
    onTaskCreated(newTask);
  };

  return (
    <div className="h-full w-2/6 bg-[#454545] rounded-md p-4">
      <NewTaskForm onTaskCreated={handleTaskCreation} />
    </div>
  );
};

export default TaskHighlight;
