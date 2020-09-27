const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

let budgets = fs.readFileSync("budget.JSON");
let budget = JSON.parse(budgets);

app.use("/", express.static("public"));

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/budget", (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
