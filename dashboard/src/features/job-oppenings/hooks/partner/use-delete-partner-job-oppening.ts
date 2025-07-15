import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletedPartnerJoppings } from "../../services/partner.service"
import { toast } from "sonner"

export function useDeletePartnerJobOppening() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["delete-partner-job-oppening"],
    mutationFn: deletedPartnerJoppings,
    onSuccess: (data) => {
      toast.success(data.message)
      queryClient.invalidateQueries({
        queryKey: ["fetch-partner-job-oppenings"],
      })
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Erro ao deletar item"
      toast.error(errorMessage)
    },
  })
}
