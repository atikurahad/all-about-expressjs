/*
 * CRUD operation with router
 * Author:Atikur Rahaman Ahad
 * Date:08/12/2024
 */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);








//get All the todos

router.get("/", async (req, res) => {
   res.send("i am from get todo")
});

//get a todo by id

router.get("/id:", async (req, res) => {});

//POST A todo

router.post('/addTodo',async(req,res)=>{

   try {
      await Todo.create(req.body)
      res.status(201).json({
         status:"success"
      })
   } catch (error) {
      res.status(400).json({
         status:"Failed"
      })
   }
})

//POST multiple todo

router.post("/all", async (req, res) => {

   
});
//PUT todo

router.put("/id:", async (req, res) => {});
//POST multiple todo

router.delete("/:id", async (req, res) => {});

module.exports = router;
