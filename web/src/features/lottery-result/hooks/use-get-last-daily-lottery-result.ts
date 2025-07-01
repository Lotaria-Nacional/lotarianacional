import { useQuery } from "@tanstack/react-query"
import { getLastDailyResult } from "../services/lottery-result.services"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"

export function useGetLastDailyLotteryResult() {

  return useQuery<DailyLotteryResultEntity>({
    queryKey:["get-last-daily-lottery-result"],
    queryFn:getLastDailyResult
  })
}
