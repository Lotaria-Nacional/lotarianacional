import { FormEvent, useState } from "react"
import { IRecruitment } from "@/interfaces"
import { recruitCandidate } from "@/api/recruitment"

export const useRecruitmentSubmit = () => {
  const [isLoading, setIsLoading] = useState(false)

  const submit = async (data: IRecruitment, e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      let formData = new FormData()

      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("phone", data.phone)
      formData.append("BI", data.BI!)
      formData.append("photo", data.photo!)
      formData.append("IBAN", data.IBAN)
      formData.append("gender", data.gender)
      formData.append("curriculum", data.curriculum!)
      formData.append("residenceProof", data.residenceProof!)

      const response = await recruitCandidate(formData)
      console.log({ ...data, IBAN: `AO06.${data.IBAN}` })
      return response
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return { submit, isLoading }
}
