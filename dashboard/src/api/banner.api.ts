import axios from "@/config/axios"
import { IBanner } from "@/interfaces"

export const getBanners = async (): Promise<IBanner> => {
  const response = await axios.get("/banners")

  return response.data[0]
}

export const addDesktopBanner = async (
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.post("/banner/desktop", data)
  return response.data
}
export const addMobileBanner = async (
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.post("/banner/mobile", data)
  return response.data
}

export const updateDesktopBanner = async (
  id: string,
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.put(`/banner/desktop/${id}`, data)
  return response.data
}

export const updateMobileBanner = async (
  id: string,
  data: FormData
): Promise<{ message: string }> => {
  const response = await axios.put(`/banner/mobile/${id}`, data)
  return response.data
}

export const deleteBanner = async (
  id: string
): Promise<{ message: string }> => {
  const response = await axios.delete(`/banner/${id}`)
  return response.data
}
