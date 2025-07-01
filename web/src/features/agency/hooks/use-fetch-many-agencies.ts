import { AgencyEntity } from "../@types/agency.type"
import { getAgencies } from "../services/agency.services"
import { useQuery } from "@tanstack/react-query"

export function useFetchManyAgencies() {
  return useQuery<AgencyEntity[]>({
    queryKey:['fetch-many-agencies'],
    queryFn:getAgencies
  })
}
