import express from "express"
import cors from "cors"
import dotenv from "dotenv"
// import serverless from "serverless-http"

import groupRoutes from "./routes/group.routes"
import { errorHandler } from "./middleware/error.middleware"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/test", (req, res) => {
  res.send("Server working")
})

app.use("/api/groups", groupRoutes)

app.use(errorHandler)

export default app;
