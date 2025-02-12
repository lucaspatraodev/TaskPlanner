import React, { useState } from "react";
import Layout from "@/components/Layout";
import TaskList from "@/components/TaskList";
import { TaskContextProvider } from "@/context/TaskContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home({ tasks }) {
  return (
    <TaskContextProvider initialTasks={tasks} className={poppins}>
      <Layout>
        <TaskList />
      </Layout>
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
