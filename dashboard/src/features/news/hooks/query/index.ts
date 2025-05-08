import { PaginationParams } from "@/types/pagination-params"
import { useQuery } from "@tanstack/react-query"
import { getAllNews, GetAllNewsResponse, getNewsByIdNews } from "../../api"
import { NEWS_QUERY_KEY } from "../../constants/keys"
import { NewsEntity } from "../../types"

export function useGetAllNews({ page=1 }:PaginationParams){
    return useQuery<GetAllNewsResponse>({
        queryKey:[NEWS_QUERY_KEY.GET_ALL, page],
        queryFn:()=>getAllNews({page}),
    })
}

export function useGetNewsById(id:string){
    return useQuery<NewsEntity>({
        queryKey:[NEWS_QUERY_KEY.GET_ALL, id],
        queryFn:()=>getNewsByIdNews(id),
    })
}