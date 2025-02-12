import axios from "axios"

export default axios.create({
  // baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: "https://lotarianacional-v2.onrender.com",
})
