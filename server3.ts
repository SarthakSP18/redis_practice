import client from "./client.ts";
import express from "express";
import axios from "axios";

const app = express(); // create express instance 

app.use(express.json()); // to use post/put methods 

app.get("/", async (req, res) => {
    try {
        const redisValue = await client.get("allusers");
        if (redisValue) {
            console.log("DATA FROM REDIS");
            return res.json(JSON.parse(redisValue)) // string to object
        }
        console.log("DATA FROM API");
        const { data } = await axios.get("https://learniq-project.onrender.com/api/auth/all");
        await client.setex("allusers", 30, JSON.stringify(data)); // object to string // redis data 
        return res.json(data); // api data

    } catch (error) {
        console.log("Something went wrong", error);
    }
})
app.listen(5002, () => {
    console.log("Server running on localhost:5002");
})