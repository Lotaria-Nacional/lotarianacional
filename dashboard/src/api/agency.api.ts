import axios from "../config/axios"
import { IAgency } from "../interfaces"

type CreateAgencyInputDTO = {
  name: string
  phone: number
  latitude: number
  longitude: number
  location_text: string
}

export type IAgencyResponse = {
  data: IAgency[] | []
  totalPages: number
  totalRecords: number
}

export const getAgencies = async (
  page?: number,
  pageSize?: number
): Promise<IAgencyResponse> => {
  const result = await axios.get("/agencies", {
    params: { page, pageSize },
  })
  return result.data
}
export const getAgencyById = async (id: string): Promise<IAgency> => {
  const result = await axios.get(`/agency/${id}`)
  return result.data
}

export const createAgency = async (
  data: CreateAgencyInputDTO
): Promise<{ message: string }> => {
  const response = await axios.post("/agency", data)

  return response.data
}

export const updateAgency = async (
  id: string,
  data: {
    name: string
    phone: number
    latitude: number
    longitude: number
    location_text: string
  }
): Promise<{ message: string }> => {
  const response = await axios.put(`/agency/${id}`, data)
  return response.data
}
export const deleteAgency = async (
  id: string
): Promise<{ message: string }> => {
  const response = await axios.delete(`/agency/${id}`)
  return response.data
}
