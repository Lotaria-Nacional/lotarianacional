import { NewsEntity } from "../@types/news.types"
import { useQuery } from "@tanstack/react-query"
import { getNewsById } from "../services/news.services"

export function useGetNewsById(id: string) {
  return useQuery<NewsEntity>({
    queryKey: ["get-news-by-id", id],
    queryFn: () => getNewsById(id),
  })
}
