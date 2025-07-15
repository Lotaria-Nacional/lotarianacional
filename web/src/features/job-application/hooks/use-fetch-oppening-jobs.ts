import { useQuery } from "@tanstack/react-query";
import { fetchManyOppeningJobs } from "../services/job-application";

export function useFetchOppeningJobs(slug?:string){
    return useQuery({
        queryKey:["fetch-many-oppening-jobs", slug],
        queryFn:()=>fetchManyOppeningJobs(slug)
    })
} 