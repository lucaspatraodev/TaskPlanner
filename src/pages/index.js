import React, { useState } from "react";
import Layout from "@/components/Layout";
import TaskList from "@/components/TaskList";
import { TaskContextProvider } from "@/context/TaskContext";
import TaskHighlight from "@/components/TaskHighlight";

export default function Home({ tasks }) {
  return (
    <TaskContextProvider initalTasks={tasks}>
      <Layout>
        <TaskList />
      </Layout>
    </TaskContextProvider>
  );
}

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/tasks");
  const data = await resData.json();

  return {
    props: { tasks: data },
  };
}
