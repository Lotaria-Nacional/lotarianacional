import { useMutation } from "@tanstack/react-query";

export function useSendJobApplication (){
  return useMutation({
    mutationKey:["send-job-application"],
    mutationFn: async()=>{}
  })
}
