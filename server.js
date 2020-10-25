const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();
const expense = require("./routes/expenses");

// Connect to Database
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

// Body Parsor Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

// Route Middleware
app.use("/budget", expense);

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
