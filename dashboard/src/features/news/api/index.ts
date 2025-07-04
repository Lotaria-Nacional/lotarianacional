import axios from "@/lib/axios"
import { NewsEntity } from "../types"
import { PaginationParams } from "@/types/pagination-params"
import { APIResponseMessage } from "@/types/api-response-message"

export type CreateNewsRequest = {
  data: FormData
}

export type UpdateNewsRequest = {
  id: string
  data: FormData
}

export type GetAllNewsResponse = {
  data: NewsEntity[]
  totalPages: number
  totalRecords: number
}

/* ############ FUNCTIONS ############ */

export async function addNews(
  data: CreateNewsRequest
): Promise<APIResponseMessage> {
  const response = await axios.post("/news", data.data)
  return response.data
}

export async function getAllNews({
  page,
}: PaginationParams): Promise<GetAllNewsResponse> {
  const response = await axios.get("/news", {
    params: { page },
  })
  return response.data
}

export async function getNewsByIdNews(id: string): Promise<NewsEntity> {
  const response = await axios.get(`/news/${id}`)
  return response.data
}

export async function updateNews(
  data: UpdateNewsRequest
): Promise<APIResponseMessage> {
  console.log(data)
  const response = await axios.put(`/news/${data.id}`, data.data)
  return response.data
}

export async function deleteNews(id: string): Promise<APIResponseMessage> {
  const response = await axios.delete(`/news/${id}`)
  return response.data
}
