import axios from "axios";
import express from "express";
import client from "./client.ts";

const app = express();

app.get("/", async (req, res) => {
  try {
    // 1) Check Redis cache first
    const cachevalue = await client.get("all");

    if (cachevalue) {
      console.log("Data from Redis");
      return res.json(JSON.parse(cachevalue));
    }

    // 2) If not in cache, fetch from API
    console.log("Data from API");
    const { data } = await axios.get(
      "https://learniq-project.onrender.com/api/auth/all"
    );

    // 3) Store data in Redis with TTL (30 seconds)
    await client.setex("all", 30, JSON.stringify(data));

    // 4) Send response
    return res.json(data);

  } catch (error:any) {
    console.error("Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.listen(5001, () => {
  console.log("Server running on localhost:5000");
});
