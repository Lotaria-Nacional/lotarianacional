import { useMutation } from "@tanstack/react-query"
import { sendApplicationReseller } from "../services/job-application"

export function useSendApplicationReseller() {
  return useMutation({
    mutationKey: ["send-application-reseller"],
    mutationFn: sendApplicationReseller,
  })
}
