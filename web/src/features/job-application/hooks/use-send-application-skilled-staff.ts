import { useMutation } from "@tanstack/react-query"
import { sendApplicationSkilledStaff } from "../services/job-application"

export function useSendApplicationSkilledStaff() {
  return useMutation({
    mutationKey: ["send-application-skilled-staff"],
    mutationFn: sendApplicationSkilledStaff,
  })
}
