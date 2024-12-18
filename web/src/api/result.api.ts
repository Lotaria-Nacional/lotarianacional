import axios from "../config/axios"
import { IDailyResult } from "../interfaces"

export const getDailyResults = async (date?:string): Promise<IDailyResult[]> => {
  const response = await axios.get(`/daily-results?date=${date}`)
  return response.data
}

export const getLastDailyResult = async (): Promise<IDailyResult> => {
  const response = await axios.get("/last-daily-result")
  return response.data
}
