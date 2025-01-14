import { IBanner } from "@/interfaces"
import { useEffect, useState } from "react"
import { getBanners } from "@/api/banner.api"

export function useBanners() {
  const [isLoading, setIsLoading] = useState(true)
  const [banners, setBanners] = useState<IBanner[] | []>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getBanners()
        setBanners(data)
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { isLoading, banners }
}
