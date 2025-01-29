import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskCountdown from "./TaskCountdown";

const TaskHighlight = () => {
  return (
    <div className="h-full w-full bg-[#454545] rounded-md p-4">
      {/* <TaskCountdown task={highlightedTask} /> */}
      <NewTaskForm />
    </div>
  );
};

export default TaskHighlight;
