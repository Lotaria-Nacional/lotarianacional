import { useState } from "react"
import { recruitCandidate } from "@/api/recruitment"
import { SendApplicationDTO } from "@/schemas/send-application.schema"

export const useRecruitmentSubmit = () => {
  const [isLoading, setIsLoading] = useState(false)

  const submit = async (data: SendApplicationDTO) => {
    setIsLoading(true)
    try {
      let formData = new FormData()

      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("email", data.email)
      formData.append("phone", data.phone)
      formData.append("BI", data.BI.item(0)!)
      formData.append("gender", data.gender)
      formData.append("residenceProof", data.residenceProof?.item(0)!)

      const response = await recruitCandidate(formData)
      return response
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return { submit, isLoading }
}
