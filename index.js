const express = require("express");
const notes = require("./data/notes");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const singleNote = notes.find((n) => n._id === req.params.id);
  res.send(singleNote);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
