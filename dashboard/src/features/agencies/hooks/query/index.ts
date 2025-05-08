import { PaginationParams } from "@/types/pagination-params";
import { useQuery } from "@tanstack/react-query";
import { AGENCY_QUERY_KEYS } from "../../constants/keys";
import { getAgencyById, getAllAgencies } from "../../api";

export function useGetAllAgencies ({ page=1,pageSize=20 }:PaginationParams){
    return useQuery({
        queryKey:[AGENCY_QUERY_KEYS.GET_ALL, page, pageSize],
        queryFn: ()=> getAllAgencies({page, pageSize}),
    })
}

export function useGetAgencyById (id:string){
    return useQuery({
        queryKey:[AGENCY_QUERY_KEYS.GET_BY_ID, id],
        queryFn: ()=> getAgencyById(id),
    })
}