// implement your API here
const express = require("express");

const { find, findById, insert, update, remove } = require("./data/db");

const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { name, bio } = req.body;
  if (!name || !bio) {
    res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  } else {
    insert();
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
