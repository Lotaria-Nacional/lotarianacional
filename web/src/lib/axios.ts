import { env } from "@/app/env"
import axios from "axios"

export default axios.create({
  baseURL: "https://lotarianacional-nmbu.onrender.com/api",
  // baseURL: env.VITE_APP_API_URL,
})
