import { useQueryClient, useMutation } from "@tanstack/react-query"
import { createResult, deleteResult, updateResult } from "../../api"
import { RESULT_QUERY_KEYS } from "../../constants/keys"

export function useCreateResult() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createResult,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [
          RESULT_QUERY_KEYS.GET_ALL,
          RESULT_QUERY_KEYS.GET_LAST,
        ],
      }),
  })
}

export function useUpdateResult() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateResult,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [RESULT_QUERY_KEYS.GET_ALL]}),
      queryClient.invalidateQueries({queryKey: [RESULT_QUERY_KEYS.GET_LAST]})
    }
  })
}

export function useDeleteResult() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteResult,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [RESULT_QUERY_KEYS.GET_ALL]}),
      queryClient.invalidateQueries({queryKey: [RESULT_QUERY_KEYS.GET_LAST]})
    }
  })
}
