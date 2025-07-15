import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createdPartnerJoppings } from "../../services/partner.service"
import { toast } from "sonner"

export function useCreatedPartnerJobOppening() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["create-partner-job-oppening"],
    mutationFn: createdPartnerJoppings,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["fetch-partner-job-oppenings"] }),
      toast.success(data.message)
    },
    onError:(error:any) => {
       const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Erro ao deletar item"
      toast.error(errorMessage)
    }
  })
}
