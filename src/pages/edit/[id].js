import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

const EditTaskForm = ({ task }) => {
  const [taskData, setTaskData] = useState(task);

  useEffect(() => {
    console.log(taskData);
  }, [taskData]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setTaskData({ ...taskData, [inputName]: inputValue });
  };

  return (
    <Layout>
      <form className="flex flex-col gap-4 items-center p-8">
        <Link href="/" className="text-white bg-yellow-800 p-2 w-20">
          Go back
        </Link>
        <div>
          <label for="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={taskData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label for="dueDate">Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={taskData.dueDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label for="timeToFinish">Time to Finish</label>
          <input
            id="timeToFinish"
            name="timeToFinish"
            type="number"
            value={taskData.timeToFinish}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="status">Status</label>
          <select
            id="status"
            name="status"
            value={taskData.status}
            onChange={handleChange}
          >
            <option value="standby">Standby</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label for="link">Link</label>
          <input
            id="link"
            name="link"
            type="text"
            value={taskData.link}
            onChange={handleChange}
          />
        </div>
      </form>
    </Layout>
  );
};

// export async function getServerSideProps({ params }) {
//   const { id } = params;

//   const resData = await fetch(`http://localhost:3001/api/tasks/${id}`);
//   const task = await resData.json();

//   return {
//     props: { task: task },
//   };
// }

export async function getStaticPaths() {
  const resData = await fetch(`http://localhost:3001/api/tasks`);
  const data = await resData.json();
  const paths = data.map((task) => {
    return { params: { id: task.id } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const resData = await fetch(`http://localhost:3001/api/tasks/${id}`);
  const task = await resData.json();

  return {
    props: { task: task },
  };
}

export default EditTaskForm;
