import axios from "@/lib/axios"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"

export const getAllDailyResults = async (): Promise<
  DailyLotteryResultEntity[]
> => {
  const response = await axios.get("/daily-lottery-results")
  return response.data
}

export const getLastDailyResult =
  async (): Promise<DailyLotteryResultEntity> => {
    const response = await axios.get("/daily-lottery-results/last")
    return response.data
  }
