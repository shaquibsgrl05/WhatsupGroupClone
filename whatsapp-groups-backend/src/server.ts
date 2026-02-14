import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import groupRoutes from "./routes/group.routes";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/test", (req, res) => {
  res.send("Server working");
});

app.use("/groups", groupRoutes);

app.use(errorHandler);

export default app;
