import { useEffect, useState } from "react"
import { getNews, INewsResponse } from "@/api/news.api"

export function useNews(page?: number, pageSize?: number) {
  const [isLoading, setIsLoading] = useState(false)
  const [news, setNews] = useState<INewsResponse | null>(null)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const data = await getNews(page, pageSize)
        setNews(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [page, pageSize])

  return { news, isLoading }
}
