import { getBanners } from "@/api/banner.api"
import { IBanner } from "@/interfaces"
import { useEffect, useState } from "react"

export function useBanners() {
  const [isLoading, setIsLoading] = useState(true)
  const [banner, setBanner] = useState<IBanner | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getBanners()
        setBanner(data)
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { isLoading, banner }
}
