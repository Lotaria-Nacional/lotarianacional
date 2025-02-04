import { useEffect, useState } from "react"
import { getNews, INewsResponse } from "@/api/news.api"

export function useNews(page?: number) {
  const [isLoading, setIsLoading] = useState(false)
  const [news, setNews] = useState<INewsResponse>({
    data: [],
    totalPages: 0,
    totalRecords: 0,
  })

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const data = await getNews(page)
        setNews(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [page])

  return { news, isLoading }
}
