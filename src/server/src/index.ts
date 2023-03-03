import express from "express";

// Really simple in-memory database; #YOLO!
let id = 0;
const createTask = (title: string) => {
  return { id: id += 1, title };
};
const tasks = [
  createTask("Task A"),
  createTask("Task B"),
  createTask("Task C")
];

// Really simple API:
const app = express();

app.use(express.json());

app.get("/api/tasks/:id", (req, res) => {
  res.send(tasks[id]);
});

app.get("/api/tasks/all", (req, res) => {
  res.send(tasks);
});

app.post("/api/tasks", (req, res) => {
  tasks.push(createTask(req.body.title));
  res.send(tasks);
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});
