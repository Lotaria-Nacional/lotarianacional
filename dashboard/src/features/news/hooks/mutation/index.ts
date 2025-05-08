import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNews, deleteNews, updateNews } from "../../api";
import { NEWS_QUERY_KEY } from "../../constants/keys";

export function useAddNews(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:addNews,
        onSuccess:()=> {
            queryClient.invalidateQueries({queryKey:[NEWS_QUERY_KEY.GET_ALL]})
            queryClient.invalidateQueries({queryKey:[NEWS_QUERY_KEY.GET_BY_ID]})
        }
    })
}

export function useUpdateNews(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:updateNews,
        onSuccess:()=> {
            queryClient.invalidateQueries({queryKey:[NEWS_QUERY_KEY.GET_ALL]})
            queryClient.invalidateQueries({queryKey:[NEWS_QUERY_KEY.GET_BY_ID]})
        }
    })
}

export function useDeleteNews(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:deleteNews,
        onSuccess:()=> {
            queryClient.invalidateQueries({queryKey:[NEWS_QUERY_KEY.GET_ALL]})
            queryClient.invalidateQueries({queryKey:[NEWS_QUERY_KEY.GET_BY_ID]})
        }
    })
}