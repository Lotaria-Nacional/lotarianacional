import axios from "@/lib/axios"
import { AgencyEntity } from "../@types/agency.type"

export const getAgencies = async () => {
  const result = await axios.get("/agencies")
  return result.data
}

export const getAgencyById = async (id: string): Promise<AgencyEntity> => {
  const result = await axios.get(`/agency/${id}`)
  return result.data
}
