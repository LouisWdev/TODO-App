const express = require("express");
const http = require("http");
const path = require('path');
const app = express();

const todos = [];
const done  = [];

app.get("/todo",(req,res)=>{
    res.send(todos);
})

app.post("/todo",(req,res)=>{
    const item = req.query.item;
    todos.push(item);
    res.send(todos);
});

app.delete("/remove/:id",(req,res)=>{
    const element   =  req.params.id;
    console.log(element);
    todos.splice(todos.indexOf(element),1);
    done.push(element);
    res.send(todos);
});

app.get("/done",(req,res)=>{
    res.send(done);
})


app.set("port", 3000);

app.listen(app.get("port"), err =>{
    if(err)
        console.log(err)
    console.log("listening on port 3000");
})