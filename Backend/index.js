import BodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { connect } from "mongoose";
import authRoute from "./router/mainRouter.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(BodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORSORIGIN,
    credentials: true,
  })
);

app.use("/api/v1", authRoute);

// MongoDB connection
connect(process.env.MONGOURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
