import React, { useEffect } from "react";
import NewTaskForm from "./Panel/NewTaskForm";
import TaskCountdown from "./Panel/TaskCountdown";
import ConfigurationBoard from "./Panel/ConfigurationBoard";
import NewTagForm from "./Panel/NewTagForm";
import { usePanel } from "@/context/PanelContext";
import { useTaskContext } from "@/context/TaskContext";

const PanelContent = () => {
  const { activeComponent, setActiveComponent } = usePanel();
  const { hasHighlightedTask, highlightedTask } = useTaskContext();

  useEffect(() => {
    const savedComponent = localStorage.getItem("activeComponent");
    if (savedComponent) {
      setActiveComponent(savedComponent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  const renderComponent = () => {
    if (hasHighlightedTask) {
      return <TaskCountdown task={highlightedTask} />;
    }

    switch (activeComponent) {
      case "ConfigurationBoard":
        return <ConfigurationBoard />;
      case "NewTagForm":
        return <NewTagForm />;
      case "NewTaskForm":
        return <NewTaskForm />;
      case "TaskCountdown":
        return <TaskCountdown />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <button
              className="p-2 bg-blue-500 rounded"
              onClick={() => setActiveComponent("ConfigurationBoard")}
            >
              Go to Configuration Board
            </button>
            <button
              className="p-2 bg-green-500 rounded"
              onClick={() => setActiveComponent("NewTagForm")}
            >
              Go to New Tag Form
            </button>
            <button
              className="p-2 bg-red-500 rounded"
              onClick={() => setActiveComponent("NewTaskForm")}
            >
              Go to New Task Form
            </button>
            <button
              className="p-2 bg-yellow-500 rounded"
              onClick={() => setActiveComponent("TaskCountdown")}
            >
              Go to Task Countdown
            </button>
          </div>
        );
    }
  };

  return (
    <section className="h-full w-full bg-[#454545] rounded-md p-4">
      {renderComponent()}
    </section>
  );
};

const Panel = () => {
  return <PanelContent />;
};

export default Panel;
