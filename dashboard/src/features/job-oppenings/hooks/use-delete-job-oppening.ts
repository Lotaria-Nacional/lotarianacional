import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteJobOppening } from "../services"
import { toast } from "sonner"

export function useDeleteJobOppening() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["delete-job-oppening"],
    mutationFn: deleteJobOppening,
    onSuccess: (data) => {
      toast.success(data.message)
      queryClient.invalidateQueries({ queryKey: ["fetch-job-oppenings"] })
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
