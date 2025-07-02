import axios from "@/lib/axios"
import { NewsEntity } from "../@types/news.types"

export type INewsResponse = {
  data: NewsEntity[] | []
  totalPages: number
  totalRecords: number
}

export const getNews = async (page?: number): Promise<INewsResponse> => {
  const result = await axios.get("/news", { params: { page } })
  return result.data
}

export const getNewsById = async (id: string): Promise<NewsEntity> => {
  const result = await axios.get(`/news/${id}`)
  return result.data
}
