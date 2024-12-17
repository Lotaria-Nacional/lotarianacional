import axios from "../config/axios"
import { IDailyResult } from "../interfaces"

export const getDailyResults = async (): Promise<IDailyResult[]> => {
  const response = await axios.get("/daily-results")
  return response.data
}

export const getLastDailyResult = async (): Promise<IDailyResult> => {
  const response = await axios.get("/last-daily-result")
  return response.data
}
