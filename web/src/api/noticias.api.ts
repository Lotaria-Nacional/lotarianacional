import axios from "../config/axios"
import { INews } from "../interfaces"

export const getNews = async (): Promise<INews[]> => {
  const result = await axios.get("/news")
  return result.data
}

export const getNewsById = async (id: string): Promise<INews> => {
  const result = await axios.get(`/news/${id}`)
  return result.data
}
