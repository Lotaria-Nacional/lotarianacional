import axios from "../config/axios"
import { IAgency } from "../interfaces"

type CreateAgencyInputDTO = {
  name: string
  phone: number
  latitude: number
  longitude: number
  location_text: string
}

export const getAgencies = async (): Promise<IAgency[]> => {
  const result = await axios.get("/agencies")
  return result.data
}

export const createAgency = async (
  data: CreateAgencyInputDTO
): Promise<{ message: string }> => {
  const response = await axios.post("/agency", data)

  return response.data
}

export const deleteAgency = async (
  id: string
): Promise<{ message: string }> => {
  const response = await axios.delete(`/agency/${id}`)
  return response.data
}
