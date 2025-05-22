import { getAllResults, getLastResults, getTotalResults } from "../../api"
import { useQuery } from "@tanstack/react-query"
import { RESULT_QUERY_KEYS } from "../../constants/keys"
import { DailyResultEntity } from "../../types"

export function useGetAllResults() {
  return useQuery<DailyResultEntity[]>({
    queryKey: [RESULT_QUERY_KEYS.GET_ALL],
    queryFn: getAllResults,
  })
}

export function useGetTotalResults() {
  return useQuery<{total:number}>({
    queryKey: [RESULT_QUERY_KEYS.GET_ALL],
    queryFn: getTotalResults,
  })
}

export function useGetLastResults() {
  return useQuery<DailyResultEntity>({
    queryKey: [RESULT_QUERY_KEYS.GET_LAST],
    queryFn: getLastResults,
  })
}
