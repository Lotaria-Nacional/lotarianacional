import axios from "@/config/axios"

export const getEmissions = async () => {
  try {
    const response = await axios.get("/emissions")
    return response.data
  } catch (e) {
    console.error(e)
    return null
  }
}
