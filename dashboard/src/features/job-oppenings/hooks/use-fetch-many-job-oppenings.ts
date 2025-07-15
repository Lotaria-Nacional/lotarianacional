import { useQuery } from "@tanstack/react-query"
import { fetchManyJobOppening } from "../services"
import { JobOppening } from "../@types"

type JobOppeningReturnType = {
  totalPages: number
  totalRecords: number
  data: JobOppening[]
}

export function useFetchJobOppenings() {
  return useQuery<JobOppeningReturnType>({
    queryKey: ["fetch-job-oppenings"],
    queryFn: fetchManyJobOppening,
  })
}
