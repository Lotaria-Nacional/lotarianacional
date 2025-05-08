import { useQuery } from "@tanstack/react-query"
import { getStatistics } from "../../api"
import { StatisticEntity } from "../../types"
import { STATISTICS_QUERY_KEYS } from "../../constants/keys"

export function useGetStatistics() {
  return useQuery<StatisticEntity>({
    queryKey: [STATISTICS_QUERY_KEYS.GET_ALL],
    queryFn: getStatistics,
  })
}
