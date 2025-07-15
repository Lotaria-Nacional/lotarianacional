import { useQuery } from "@tanstack/react-query";
import { getPartnerOppeningJobs } from "../services/job-application";

export function useGetPartnerOppeningJobById(id:string){
    return useQuery({
        queryKey:["get-partner-oppening-job-by-id", id],
        queryFn:()=> getPartnerOppeningJobs(id)
    })
} 