import { env } from "@/app/env"
import axios from "axios"

export default axios.create({
  // baseURL: env.VITE_APP_API_URL,
  baseURL: "http://localhost:8080/api",
  // baseURL: "https://lotarianacional-nmbu.onrender.com/api",
})
