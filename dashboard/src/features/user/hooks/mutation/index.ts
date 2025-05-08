import { USERS_QUERY_KEYS } from "../../constants/keys";
import { addUser, removeUser, updateUser } from "../../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddUser(){
    const queryClient = useQueryClient()
 
    return useMutation({
        mutationFn:addUser,
        onSuccess:()=> {
            queryClient.invalidateQueries({queryKey:[USERS_QUERY_KEYS.GET_ALL]})
            queryClient.invalidateQueries({queryKey:[USERS_QUERY_KEYS.GET_BY_ID]})
        }
    })
}

export function useUpdateUser(){
    const queryClient = useQueryClient()
 
    return useMutation({
        mutationFn:updateUser,
        onSuccess:()=> {
            queryClient.invalidateQueries({queryKey:[USERS_QUERY_KEYS.GET_ALL]})
            queryClient.invalidateQueries({queryKey:[USERS_QUERY_KEYS.GET_BY_ID]})
        }
    })
}

export function useRemoveUser(){
    const queryClient = useQueryClient()
 
    return useMutation({
        mutationFn:removeUser,
        onSuccess:()=> {
            queryClient.invalidateQueries({queryKey:[USERS_QUERY_KEYS.GET_ALL]})
            queryClient.invalidateQueries({queryKey:[USERS_QUERY_KEYS.GET_BY_ID]})
        }
    })
}