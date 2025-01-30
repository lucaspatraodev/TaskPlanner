import Layout from "@/components/Layout";
import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import TaskHighlight from "@/components/Panel";
import { TaskContextProvider } from "@/context/TaskContext";

const taskDetail = ({ task }) => {
  return (
    <TaskContextProvider>
      <Layout>
        <motion.div
          className="flex flex-col w-full h-full p-2"
          initial={{ scale: 0 }}
          animate={{ scale: 0.9 }}
          transition={{
            duration: 0.2,
            scale: { type: "spring", visualDuration: 0.22, bounce: 0.2 },
          }}
        >
          <Link href="/" className="text-white bg-yellow-800 p-2 w-20">
            Go back
          </Link>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.priority}</p>
          <p>{task.timeToFinish}</p>
          <p>{task.status}</p>
          <p>{task.link}</p>
          <p>{task.createdAt}</p>
        </motion.div>
      </Layout>
    </TaskContextProvider>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const resData = await fetch(`http://localhost:3001/api/tasks/${id}`);
  const task = await resData.json();

  return {
    props: { task: task },
  };
}

export default taskDetail;
