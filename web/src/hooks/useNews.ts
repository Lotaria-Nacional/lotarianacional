import { INews } from "@/interfaces"
import { getNews } from "@/api/noticias.api"
import { useEffect, useState } from "react"

export function useNews(): { news: INews[]; isLoading: boolean } {
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

  return { isLoading, news }
}
