import React, { useState } from "react";
import { TaskContextProvider } from "@/context/TaskContext";
import { Poppins } from "next/font/google";
import Panel from "@/components/PomodoroDashboard/Panel";
import NewTaskForm from "@/components/PomodoroDashboard/NewTaskForm";
import TaskBoard from "@/components/PomodoroDashboard/TaskList";
import { useNavigation } from "@/context/NavigationContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function PomodoroDashboard({ tasks }) {
  const { navigate } = useNavigation();

  return (
    <TaskContextProvider initialTasks={tasks} className={poppins}>
      <Panel
        onFormOpen={() => {
          navigate("NewTaskForm");
        }}
      />
      <TaskBoard />
    </TaskContextProvider>
  );
}

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3000/api/tasks");
  const data = await resData.json();

  return {
    props: { tasks: data },
  };
}
