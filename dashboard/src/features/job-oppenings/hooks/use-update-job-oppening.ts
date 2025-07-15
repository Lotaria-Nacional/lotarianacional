import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateJobOppening } from "../services"
import { toast } from "sonner"

export function useUpdateJobOppening() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["update-job-oppening"],
    mutationFn: updateJobOppening,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["fetch-job-oppenings"] }),
        toast.success(data.message)
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || error?.message || "Erro ao atualizar"
      toast.success(errorMessage)
    },
  })
}
