import {  useQuery } from "@tanstack/react-query"
import { EmissionEntity } from "../@types/emission.types"
import { getEmissions } from "@/features/emission/services/emission.service"

export function useFetchManyEmission() {
  return useQuery<EmissionEntity[]>({
      queryKey:["fetch-many-emissions"],
      queryFn:getEmissions
  })
}
