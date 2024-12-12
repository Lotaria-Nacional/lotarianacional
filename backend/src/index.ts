import cors from "cors"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

import authRoutes from "./Infra/http/routes/auth.routes"
import userRoutes from "./Infra/http/routes/user.routes"
import newsRoutes from "./Infra/http/routes/news.routes"
import agencyRoutes from "./Infra/http/routes/agency.routes"
import resultRoutes from "./Infra/http/routes/result.routes"

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
