import axios from "@/config/axios"
import { IBanner } from "@/interfaces"

export const getBanners = async (): Promise<IBanner[]> => {
  const response = await axios.get("/banner")
  return response.data
}

export const addBanner = async (
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.post("/banner", data)
  return response.data
}

export const updateBanner = async (
  id: string,
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.put(`/banner/${id}`, data)
  return response.data
}

export const deleteBanner = async (id: string): Promise<{ message: string }> => {
  const response = await axios.delete(`/banner/${id}`)
  return response.data
}
