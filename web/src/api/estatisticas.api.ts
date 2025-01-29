import axios from "@/config/axios"
import { IStatistic } from "@/interfaces"

export const getStatistics = async (): Promise<IStatistic> => {
  
  const result = await axios.get("/statistics")
  return result.data
}
