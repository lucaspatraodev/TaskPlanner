import React from "react";
import TaskHighlight from "./TaskHighlight";

const Layout = ({ children, onTaskCreated }) => {
  const handleTaskCreation = (newTask) => {
    onTaskCreated(newTask);
  };

  return (
    <div className="flex flex-col w-full h-[100%] overflow-hidden">
      <main className="flex gap-8 flex-grow min-w-full min-h-full bg-[#000000] overflow-y-auto p-6">
        <TaskHighlight onTaskCreated={handleTaskCreation} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
