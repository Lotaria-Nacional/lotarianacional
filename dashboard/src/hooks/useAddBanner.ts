import { useState } from "react"
import { isAxiosError } from "axios"
import { addBanner } from "@/api/banner.api"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

export function useAddBanner() {
  const [isLoading, setIsLoading] = useState(false)

  const handleAddBanner = async (data: FormData) => {
    setIsLoading(true)
    try {
      const result = await addBanner(data)
      return result
    } catch (error) {
      console.log("error: ", error)
      if (isAxiosError(error)) {
        if (!error.response) {
          throw TRY_LATER_ERROR
        }
        throw error.response.data
      }
      throw SERVER_CONNECTION_ERROR
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, handleAddBanner }
}
