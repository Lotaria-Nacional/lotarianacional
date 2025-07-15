import { useQuery } from "@tanstack/react-query"
import { fetchManydPartnerJoppings } from "../../services/partner.service"
import { PartnerJobOppening } from "../../@types"

type PartnerJobOppeningReturnType = {
  totalPages: number
  totalRecords: number
  data: PartnerJobOppening[]
}

export function useFetchPartnerJobOppenings() {
  return useQuery<PartnerJobOppeningReturnType>({
    queryKey: ["fetch-partner-job-oppenings"],
    queryFn: fetchManydPartnerJoppings,
  })
}
