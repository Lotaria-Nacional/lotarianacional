import { useEffect, useState } from "react"
import { EmissionEntity } from "../@types/emission.types"
import { getEmissions } from "@/features/emission/services/emission.service"

export function useEmission() {
  const [emissions, setEmissions] = useState<EmissionEntity[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const data = await getEmissions()
        setEmissions(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])
  return { emissions, isLoading }
}
