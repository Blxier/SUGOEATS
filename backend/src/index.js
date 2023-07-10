import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/userRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://sugoeats:sUg0Eats2023@sugoeats.8bt2bbu.mongodb.net/sugoeats_db?retryWrites=true&w=majority"
);

app.listen(5001, () => console.log("Server Started!"));
