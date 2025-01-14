import axios from "@/config/axios"
import { IBanner } from "@/interfaces"

export const getBanners = async (): Promise<IBanner> => {
  const response = await axios.get("/banner")

  return response.data[0]
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

export const deleteBanner = async (
  devicePosition: string
): Promise<{ message: string }> => {
  console.log("dashboard ~ deleteBanner ~ devicePosition: ", devicePosition)
  const response = await axios.put(`/banner`, { devicePosition })
  return response.data
}
