import axios from "@/lib/axios"
import { StatisticEntity } from "../@types/statistics.types"

export const getStatistics = async (): Promise<StatisticEntity> => {
  const result = await axios.get("/statistics")
  return result.data
}
