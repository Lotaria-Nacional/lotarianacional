import { useQuery } from "@tanstack/react-query"
import { StatisticEntity } from "../@types/statistics.types"
import { getStatistics } from "@/features/statistics/services/statistics.services"

export function useGetStatistics() {
  return useQuery<StatisticEntity | null>({
    queryKey: ["get-statistics"],
    queryFn: getStatistics,
  })
}
