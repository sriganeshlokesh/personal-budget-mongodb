const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static("public"));

const budget = {
  myBudget: [
    {
      title: "Eat Out",
      budget: 50,
    },
    {
      title: "Rent",
      budget: 335,
    },
    {
      title: "Grocery",
      budget: 100,
    },
  ],
};

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/budget", (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
