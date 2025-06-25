import axios from "@/lib/axios"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"

export const getDailyResults = async (
  date?: string
): Promise<DailyLotteryResultEntity[]> => {
  const response = await axios.get(`/daily-results?date=${date}`)
  return response.data
}

export const getAllDailyResults = async (): Promise<DailyLotteryResultEntity[]> => {
  const response = await axios.get("/all-daily-results")
  return response.data
}

export const getLastDailyResult = async (): Promise<DailyLotteryResultEntity> => {
  const response = await axios.get("/last-daily-result")
  return response.data
}
