import { useQuery } from "@tanstack/react-query"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"
import { getAllDailyResults } from "../services/lottery-result.services"

export function useFetchManyDailyLotteryResults() {
  return useQuery<DailyLotteryResultEntity[]>({
    queryKey: ["fetch-many-daily-lottery-result"],
    queryFn: getAllDailyResults,
  })
}
