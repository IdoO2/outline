import express from "express";

// Really simple in-memory database; #YOLO!
let id = 0;

const createItem = (title: string, level: number) => {
  return { id: (id += 1).toString(), title, level: level };
};

const items = [
  createItem("Item 1", 0),
  createItem("Item 2", 1),
  createItem("Item 3", 0),
  createItem("Item 4", 1),
  createItem("Item 5", 1),
  createItem("Item 6", 1),
];

// Really simple API:
const app = express();

app.use(express.json());

// allow CORS
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// get one item
app.get("/api/items/:id", (_req, res) => {
  if (!id || !items[id]) {
    res.status(404).send("Not found");
    return;
  }

  res.send(items[id]);
});

// get all items
app.get("/api/items/all", (_req, res) => {
  res.send(items);
});

// move item to a new level
app.post("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const { level } = req.body;

  const item = items.find((item) => item.id === id);

  if (!item || level < 0 || level > 1) {
    res.status(400).send("Invalid request");
    return;
  }

  item.level = level;

  res.send(items);
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});
