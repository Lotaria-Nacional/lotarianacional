import { useQuery } from "@tanstack/react-query"
import { getNews, INewsResponse } from "../services/news.services"

export function useFetchManyNews(page?: number) {
  return useQuery<INewsResponse>({
    queryKey: ["fetch-many-news", page],
    queryFn: () => getNews(page),
  })
}
