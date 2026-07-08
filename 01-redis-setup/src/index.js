import express from "express";
import mongoose from "mongoose";
import Redis from "ioredis";

const app = express();

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

app.get("/redis", async (req, res) => {
  const reply = await redis.ping();
  res.json({
    message: reply,
  });
});

app.get("/mongo", async (req, res) => {
  const mongoUrl =
    process.env.MONGO_URL ||
    "mongodb://admin:secret@localhost:27017/?authSource=admin";

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoUrl);
  }

  res.json({
    message: "connected",
    database: mongoose.connection.db.databaseName,
  });
});

app.listen(3000, () => {
  console.log("Server listen of port 3000");
});
