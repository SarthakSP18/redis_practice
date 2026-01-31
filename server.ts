import axios from "axios";
import express, { json } from "express";
import client from "./client.ts";

const app = express();

app.use(express.json())

app.get("/",async(req,res)=>{
    const cachevalue = await client.get("allusers"); // get all users 
    // const cachevalue = await client.get("todos"); // get todos data 
    if(cachevalue) return res.json(JSON.parse(cachevalue)); // string -> object
    const {data}=await axios.get("https://learniq-project.onrender.com/api/auth/all");
    // const {data}=await axios.get("https://jsonplaceholder.typicode.com/comments/");
    // const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos/");
    await client.setex("allusers",30,JSON.stringify(data)); // object -> string
    // await client.setex("comments",30,JSON.stringify(data));
    // await client.setex("todos",30,JSON.stringify(data));
   
    return res.json(data);
})

app.listen(5000,()=>{
    console.log("Server running on localhost:5000");
})