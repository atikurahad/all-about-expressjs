 const express = require('express');
 const app = express();
 const PORT = 3001;


 app.get('/',(req,res)=>{
    
    res.end("Hello EXPRESS")

 })
 app.post('/',(req,res)=>{
    
    res.end("Hello EXPRESS, I am from Post")

 })

 app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
 })