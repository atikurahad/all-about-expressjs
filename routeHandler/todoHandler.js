/*
 * CRUD operation with router
 * Author:Atikur Rahaman Ahad
 * Date:08/12/2024
 */

const express = require("express");
const router = express.Router();

//get All the todos

router.get("/", async (req, res) => {});

//get a todo by id

router.get("/id:", async (req, res) => {});
//POST todo

router.post("/", async (req, res) => {});
//POST multiple todo

router.post("/all", async (req, res) => {});
//PUT todo

router.put("/id:", async (req, res) => {});
//POST multiple todo

router.delete("/:id", async (req, res) => {});

module.exports = router;
