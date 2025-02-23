import React from "react";
import Layout from "@/components/Layout";
import { TaskContextProvider } from "@/context/TaskContext";
import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import TaskBoard from "@/components/PomodoroDashboard/TaskList";
import { PanelProvider } from "@/context/PanelContext";
import PomodoroDashboard from "./mode/Pomodoro";
import Dashboard from "@/components/Dashboard/Dashboard";
import NewTaskForm from "@/components/PomodoroDashboard/NewTaskForm";

const HomePage = ({ tasks, pomodoroTasks }) => {
  const renderComponent = (tasks, pomodoroTasks) => {
    const { activeComponent } = useNavigation();

    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Pomodoro":
        return <PomodoroDashboard tasks={pomodoroTasks} />;
      case "Kanban":
        return <h1 className="text-white">Kanban</h1>;
      case "Settings":
        return <h1 className="text-white">Settings</h1>;
      case "Reports":
        return <NewTaskForm />;
      default:
        return <TaskBoard />;
    }
  };

  return renderComponent(tasks, pomodoroTasks);
};

export default function Home({ tasks, pomodoroTasks }) {
  return (
    <TaskContextProvider initialTasks={tasks}>
      <PanelProvider>
        <NavigationProvider>
          <Layout>
            <HomePage tasks={tasks} pomodoroTasks={pomodoroTasks} />
          </Layout>
        </NavigationProvider>
      </PanelProvider>
    </TaskContextProvider>
  );
}

export async function getServerSideProps() {
  const taskRes = await fetch("http://localhost:3000/api/tasks");
  const taskData = await taskRes.json();

  const pomoRes = await fetch("http://localhost:3001/tasks/pomodoro");
  const pomoData = await pomoRes.json();

  return {
    props: { tasks: taskData, pomodoroTasks: pomoData },
  };
}
