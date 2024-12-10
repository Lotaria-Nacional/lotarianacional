import axios from "../config/axios"
import { INews } from "../interfaces"

export const getNews = async (): Promise<INews[]> => {
  const result = await axios.get("/news")
  return result.data
}
