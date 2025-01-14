import { deleteBanner } from "@/api/banner.api"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { isAxiosError } from "axios"
import { useState } from "react"

export function useDeleteBanner() {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteBanner = async (devicePosition: string) => {
    setIsDeleting(true)
    try {
      const result = await deleteBanner(devicePosition)
      return result.message
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) {
          throw TRY_LATER_ERROR
        }
        throw error.response.data
      }
      throw SERVER_CONNECTION_ERROR
    } finally {
      setIsDeleting(false)
    }
  }

  return { isDeleting, handleDeleteBanner }
}
