import React from "react";
import Layout from "@/components/Layout";
import TaskHighlight from "@/components/TaskHighlight";
import TaskList from "@/components/TaskList";

export default function Home({ tasks }) {
  return (
    <Layout>
      <TaskHighlight />
      <TaskList tasks={tasks} />
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
