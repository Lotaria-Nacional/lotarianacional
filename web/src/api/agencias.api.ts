import axios from "../config/axios"
import { IAgency } from "../interfaces"

export const getAgencies = async (): Promise<IAgency[]> => {
  const result = await axios.get("/agencies")
  return result.data
}
export const getAgencyById = async (id: string): Promise<IAgency> => {
  const result = await axios.get(`/agency/${id}`)
  return result.data
}
