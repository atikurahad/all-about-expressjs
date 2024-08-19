/*
*Make schema with mongoose 
 */

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
   
    date:{
        type:Date,
        default:Date.now,
    }
})


module.exports = todoSchema;