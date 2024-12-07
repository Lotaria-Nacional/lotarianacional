import cors from "cors"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

import authRoutes from "./Infra/Http/Routes/AuthRoutes"
import userRoutes from "./Infra/Http/Routes/UserRoutes"
import newsRoutes from "./Infra/Http/Routes/NewsRoutes"
import agencyRoutes from "./Infra/Http/Routes/AgencyRoutes"
import resultRoutes from "./Infra/Http/Routes/ResultRoutes"

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
