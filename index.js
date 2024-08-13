/*
 * Make a simple todo
 * CRUD operation
 * Mongoose
 * MongoDb
 * Author:Atikur Rahaman Ahad
 * Date:08/12/2024
 */

const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");
const router = require("./routeHandler/todoHandler");

//express app initialize
const app = express();
app.use(express.json());
app.use(router)
//mongoose connect
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("connected with DB"))
  .catch((err) => console.log(err));

app.use("/todo", todoHandler);

app.listen(3001, () => {
  console.log("App is listening on port 3001");
});
