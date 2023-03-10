import express from "express";

// Really simple in-memory database; #YOLO!
let id = 0;

const createItem = (title: string, level: number) => {
  return { id: (id += 1).toString(), title, level };
};

const db = {
  items: [
    createItem("Item 1", 0),
    createItem("Item 2", 1),
    createItem("Item 3", 0),
    createItem("Item 4", 1),
    createItem("Item 5", 1),
    createItem("Item 6", 1),
  ],
};

// Really simple API:
const app = express();

app.use(express.json());

// allow CORS
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

// get all items
app.get("/v1/items", (_req, res) => {
  res.send(db.items);
});

// save all items
app.put("/v1/items", (req, res) => {
  db.items = req.body;

  res.send(db.items);
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});
