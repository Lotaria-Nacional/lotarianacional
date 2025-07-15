import { useQuery } from "@tanstack/react-query";
import { getOppeningJobs } from "../services/job-application";

export function useGetOppeningJobById(id:string){
    return useQuery({
        queryKey:["get-oppening-job-by-id", id],
        queryFn:()=> getOppeningJobs(id)
    })
} 