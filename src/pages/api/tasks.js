import axios from "axios";

export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/tasks");
    const data = await dataRes.json();

    return res.send(data);
  } else if (req.method === "POST") {
    const {
      title,
      description,
      dueDate,
      priority,
      timeToFinish,
      status,
      active,
      link,
    } = req.body;

    if (
      !title ||
      !description ||
      !dueDate ||
      !priority ||
      !timeToFinish ||
      !status ||
      active === undefined ||
      !link
    ) {
      return res.status(402).send("There are missing data!");
    }

    try {
      const axiosResponse = await axios.post(
        "http://localhost:3001/api/tasks",
        req.body
      );
      return res.send(axiosResponse.data);
    } catch {
      return status(422).send("Data cannot be stored!");
    }
  }
}
