import { useQuery } from "@tanstack/react-query";
import { fetchManyPartnerOppeningJobs } from "../services/job-application";

export function useFetchPartnerOppeningJobs(filter?:string){
    return useQuery({
        queryKey:["fetch-many-partner-oppening-jobs", filter],
        queryFn:()=>fetchManyPartnerOppeningJobs(filter)
    })
} 