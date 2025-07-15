import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createJobOppening } from "../services"

export function useCreateJobOppening() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["create-job-oppening"],
    mutationFn: createJobOppening,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["fetch-job-oppenings"] }),
  })
}
