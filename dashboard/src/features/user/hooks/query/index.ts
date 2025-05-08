import { useQuery } from "@tanstack/react-query";
import { USERS_QUERY_KEYS } from "../../constants/keys";
import { getAllUsers, getUserByIdUser } from "../../api";
import { UserEntity } from "../../types";

export function useGetAllUsers (){
    return useQuery<UserEntity[]>({
        queryKey:[USERS_QUERY_KEYS.GET_ALL],
        queryFn:getAllUsers
    })
}

export function useGetUserById (id:string){
    return useQuery<UserEntity>({
        queryKey:[USERS_QUERY_KEYS.GET_ALL, id],
        queryFn:()=>getUserByIdUser(id)
    })
}