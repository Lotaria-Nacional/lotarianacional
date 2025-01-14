import axios from "../config/axios"
import { INews } from "../interfaces"

export type INewsResponse = {
  data: INews[] | []
  totalPages: number
  totalRecords: number
}

export const getNews = async (page?: number): Promise<INewsResponse> => {
  const result = await axios.get("/news", { params: { page } })
  return result.data
}

export const getNewsById = async (id: string): Promise<INews> => {
  const result = await axios.get(`/news/${id}`)
  return result.data
}
