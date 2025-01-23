import Layout from "@/components/Layout";
import React, { useEffect } from "react";

const taskDetail = ({ taskData }) => {
  return (
    <Layout>
      <div className="w-full h-full p-4 bg-[#FFFFFF]">
        <h1>Task title: {taskData.title}</h1>
        <h1>Task description: {taskData.description}</h1>
        <h1>Task priority: {taskData.priority}</h1>
        <h1>Task timeToFinish: {taskData.timeToFinish}</h1>
        <h1>Task status: {taskData.status}</h1>
        <h1>Task link: {taskData.link}</h1>
        <h1>Task createdAt: {taskData.createdAt}</h1>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const resData = await fetch(`http://localhost:3001/api/tasks/${id}`);
  const taskData = await resData.json();

  return {
    props: { taskData: taskData },
  };
}

export default taskDetail;
