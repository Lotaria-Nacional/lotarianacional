import { addAgency, deleteAgency, updateAgency } from "../../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AGENCY_QUERY_KEYS } from "../../constants/keys";

export function useAddAgency (){
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: addAgency,
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[AGENCY_QUERY_KEYS.GET_ALL]})
    })
}

export function useUpdateAgency(){
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: updateAgency,
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[AGENCY_QUERY_KEYS.GET_ALL]})
    })
}

export function useDeleteAgency(){
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: deleteAgency,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [AGENCY_QUERY_KEYS.GET_ALL] })
    })
}