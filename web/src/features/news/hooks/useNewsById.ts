import { useEffect, useState } from "react"
import { NewsEntity } from "../@types/news.types"
import { getNewsById } from "../services/news.services"

export function useNewsById(id: string) {
  const [newsById, setNewsById] = useState<NewsEntity>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getNewsById(id)
        setNewsById(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [id])

  return { isLoading, newsById }
}
