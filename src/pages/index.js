import React from "react";
import Layout from "@/components/Layout";
import TaskHighlight from "@/components/TaskHighlight";
import TaskList from "@/components/TaskList";

import { tasks } from "@/api/data";

export default function Home() {
  return (
    <Layout>
      <TaskHighlight />
      <TaskList tasks={tasks} />
    </Layout>
  );
}
