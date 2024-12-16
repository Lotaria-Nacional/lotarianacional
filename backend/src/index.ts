import cors from "cors"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

import authRoutes from "./Infra/http/routes/auth.routes"
import userRoutes from "./Infra/http/routes/user.routes"
import newsRoutes from "./Infra/http/routes/news.routes"
import agencyRoutes from "./Infra/http/routes/agency.routes"
import resultRoutes from "./Infra/http/routes/result.routes"
import dailyResults from "./Infra/http/routes/dailyResults.routes"
import bannerResults from "./Infra/http/routes/banner.routes"
import cookieParser from "cookie-parser"
// import { authenticateMiddleware } from "./Infra/http/middlewares/authenticate.middleware"

const app = express()

console.log(process.env.NODE_ENV, " -> ", process.env.DATABASE_URL)

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", newsRoutes)
app.use("/api", resultRoutes)
app.use("/api", agencyRoutes)
app.use("/api", dailyResults)
app.use("/api", bannerResults)

const PORT = 8080
app.listen(PORT, () => {
  console.log("Server Running... -> " + PORT)
})
