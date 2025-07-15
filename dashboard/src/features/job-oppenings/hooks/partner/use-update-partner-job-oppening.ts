import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatedPartnerJoppings } from "../../services/partner.service"
import { toast } from "sonner"

export function useUpdatePartnerJobOppening() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["update-partner-job-oppening"],
    mutationFn: updatedPartnerJoppings,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["fetch-partner-job-oppenings"],
      }),
        toast.success(data.message)
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || error?.message || "Erro ao atualizar"
      toast.success(errorMessage)
    },
  })
}
