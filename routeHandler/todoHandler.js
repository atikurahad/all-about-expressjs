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

// router.post('/',async(req,res)=>{
//    await Todo.insertOne(req.body,()=>{
//       if(err){
//          res.send(500).json({
//             err:"there was an error"
//          })
//       }else{
//          res.send(200).json({
//             message:"there was no  error"
//          })
//       }
//    })
// })

//POST multiple todo

router.post("/all", async (req, res) => {

   
});
//PUT todo

router.put("/id:", async (req, res) => {});
//POST multiple todo

router.delete("/:id", async (req, res) => {});

module.exports = router;
