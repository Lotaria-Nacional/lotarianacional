import axios from "../config/axios"
import { IAgency } from "../interfaces"

export const getAgencies = async (): Promise<IAgency[]> => {
  const result = await axios.get("/agencies")
  return result.data
}
