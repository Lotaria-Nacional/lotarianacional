import axios from "../config/axios"
import { IDailyResult } from "../interfaces"

export const getResults = async (): Promise<IDailyResult[]> => {
  const response = await axios.get("/results")
  return response.data
}
