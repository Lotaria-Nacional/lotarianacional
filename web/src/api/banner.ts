import axios from "@/config/axios"
import { IBanner } from "@/interfaces"

export const getBanners = async (): Promise<IBanner> => {
  const result = await axios.get("/banner")
  return result.data[0]
}
