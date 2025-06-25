import axios from "axios"
import { env } from "@/app/env"

export default axios.create({
    baseURL: env.VITE_APP_API_URL,
})