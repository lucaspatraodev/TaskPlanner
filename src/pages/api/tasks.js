import axios from "axios";

export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/tasks");
    const data = await dataRes.json();

    return res.send(data);
  } else if (req.method === "POST" || req.method === "PATCH") {
    const {
      title,
      description,
      dueDate,
      priority,
      timeToFinish,
      status,
      active,
      link,
      id,
      createdAt,
    } = req.body;

    const url =
      req.method === "POST"
        ? "http://localhost:3001/api/tasks"
        : `http://localhost:3001/api/tasks/${id}`;

    if (
      !title ||
      !description ||
      !dueDate ||
      !priority ||
      !timeToFinish ||
      !status ||
      active === undefined ||
      !link ||
      !createdAt
    ) {
      console.log("Missing data");
      return res.status(400).send("There are missing data");
    }

    console.log(`request method is ${req.method.toLowerCase()}`);
    console.log(`url is ${url}`);

    try {
      const axiosResponse = await axios[req.method.toLowerCase()](
        url,
        req.body
      );
      return res.send(axiosResponse.data);
    } catch (error) {
      console.error(error);
      return res.status(422).send("Data cannot be stored!");
    }
  }
}
