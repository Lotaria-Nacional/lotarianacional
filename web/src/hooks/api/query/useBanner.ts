import { getBanners } from "@/api/banner"
import { IBanner } from "@/interfaces"
import { useEffect, useState } from "react"

export function useBanner() {
  const [isLoading, setIsLoading] = useState(true)
  const [banner, setBanner] = useState<IBanner[] | []>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getBanners()
        setBanner(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { isLoading, banner }
}
