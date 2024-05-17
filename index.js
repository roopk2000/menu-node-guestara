const express=require("express");
const mongoose=require("mongoose");
const app=require("./app");






mongoose.connect("mongodb+srv://meroopkumar2:6qOQYHzOuBizyeSQ@cluster0.shfnnzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Not connected to the database");
})









//username- meroopkumar2
//password - 6qOQYHzOuBizyeSQ