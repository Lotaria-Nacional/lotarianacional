import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createdPartnerJoppings } from "../../services/partner.service"

export function useCreatedPartnerJobOppening() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["create-partner-job-oppening"],
    mutationFn: createdPartnerJoppings,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["fetch-partner-job-oppenings"],
      }),
  })
}
