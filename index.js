const express = require("express");
const mongoose = require("mongoose");

//express app initialize
const app = express();
app.use(express.json());

//mongoose connect
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("connected with DB"))
  .catch((err) => console.log(err));

  app.use('/todo',todoHandler);

app.listen(3001, () => {
  console.log("App is listening on port 3001");
});
