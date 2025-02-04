import { useEffect, useState } from "react"
import { IEmission } from "@/interfaces"
import { getEmissions } from "@/api/emission"

export function useEmissions() {
  const [emissions, setEmissions] = useState<IEmission[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const response = await getEmissions()
        setEmissions(response)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { emissions, isLoading }
}
