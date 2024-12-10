import cors from "cors"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

import authRoutes from "./infra/http/routes/auth.routes"
import userRoutes from "./infra/http/routes/user.routes"
import newsRoutes from "./infra/http/routes/news.routes"
import agencyRoutes from "./infra/http/routes/agency.routes"
import resultRoutes from "./infra/http/routes/result.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", userRoutes)
app.use("/api", newsRoutes)
app.use("/api", resultRoutes)
app.use("/api", agencyRoutes)
app.use("/api", authRoutes)

const PORT = 8080
app.listen(PORT, () => {
  console.log("Server Running... -> " + PORT)
})
