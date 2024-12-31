import { INews } from "@/interfaces"
import { useEffect, useState } from "react"
import { getNewsById } from "@/api/noticias.api"

export function useNewsById(id: string) {
  const [newsById, setNewsById] = useState<INews>()
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
