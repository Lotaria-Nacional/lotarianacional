import axios from "../config/axios"
import { IAgency } from "../interfaces"

export type IAgencyResponse = {
  data: IAgency[] | []
  totalPages: number
  totalRecords: number
}

export const getAgencies = async (page?: number): Promise<IAgencyResponse> => {
  const result = await axios.get("/agencies", { params: { page } })
  return result.data
}
export const getAgencyById = async (id: string): Promise<IAgency> => {
  const result = await axios.get(`/agency/${id}`)
  return result.data
}
