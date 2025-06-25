import { useEffect, useState } from "react"
import { BannerEntity } from "../@types/banner.types"
import { getBanners } from "@/features/banner/services/banner.api"

export function useBanner() {
  const [isLoading, setIsLoading] = useState(true)
  const [banner, setBanner] = useState<BannerEntity[] | []>([])

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
