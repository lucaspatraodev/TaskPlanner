import React, { useState } from "react";
import Layout from "@/components/Layout";
import TaskList from "@/components/TaskList";
import axios from "axios";

export default function Home({ tasks }) {
  const [taskList, SetTaskList] = useState(tasks);

  const createTask = async (newTask) => {
    await axios
      .post("/api/tasks", newTask)
      .then(() => {})
      .catch((err) => alert(err?.response?.data));

    handleReload();
  };

  const handleReload = async () => {
    try {
      axios.get("http://localhost:3001/api/tasks").then((res) => {
        SetTaskList(res.data);
      });
    } catch (error) {
      console.error("Error trying to GET tasks: ", error);
    }
  };

  return (
    <Layout onTaskCreated={createTask}>
      <TaskList tasks={taskList} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/tasks");
  const data = await resData.json();

  return {
    props: { tasks: data },
  };
}
