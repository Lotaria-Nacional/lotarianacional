import { getEmissions } from "@/api/emissoes.api"
import { IEmission } from "@/interfaces"
import { useEffect, useState } from "react"

export function useEmission() {
  const [emissions, setEmissions] = useState<IEmission[]>([])
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
