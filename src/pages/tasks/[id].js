import Layout from "@/components/Layout";
import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";

const taskDetail = ({ taskData }) => {
  return (
    <Layout>
      <section className="h-full w-4/6 bg-[#454545] rounded-md">
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
          <h1>{taskData.title}</h1>
          <p>{taskData.description}</p>
          <p>{taskData.dueDate}</p>
          <p>{taskData.priority}</p>
          <p>{taskData.timeToFinish}</p>
          <p>{taskData.status}</p>
          <p>{taskData.link}</p>
          <p>{taskData.createdAt}</p>
        </motion.div>
      </section>
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
