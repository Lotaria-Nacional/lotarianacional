import { INews } from "@/interfaces"
import { getNews } from "@/api/news.api"
import { useEffect, useState } from "react"

export function useNews() {
  const [isLoading, setIsLoading] = useState(true)
  const [news, setNews] = useState<INews[]>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getNews()
        setNews(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { news, isLoading }
}
