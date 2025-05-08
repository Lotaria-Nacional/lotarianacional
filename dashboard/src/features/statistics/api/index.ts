import axios from "@/lib/axios"
import { StatisticEntity } from "../types"

export async function getStatistics(): Promise<StatisticEntity> {
  const result = await axios.get("/statistics")
  return result.data
}
