/*
 * CRUD operation with router
 * Author:Atikur Rahaman Ahad
 * Date:08/12/2024
 */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo",todoSchema);
//get All the todos

router.get("/", async (req, res) => {});

//get a todo by id

router.get("/id:", async (req, res) => {});
//POST todo

router.post("/", async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                error: "there was a server site eroro"
            })

        }
        else{
            res.status(200).json({
                message:"todo inserted sucsessfully"
            })
        }
    })



});
//POST multiple todo

router.post("/all", async (req, res) => {});
//PUT todo

router.put("/id:", async (req, res) => {});
//POST multiple todo

router.delete("/:id", async (req, res) => {});

module.exports = router;
