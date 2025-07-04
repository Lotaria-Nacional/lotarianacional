import { env } from "@/app/env"
import axios from "axios"

export default axios.create({
  baseURL: env.VITE_APP_API_URL,
})
