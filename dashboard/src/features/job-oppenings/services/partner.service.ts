import axios from "@/lib/axios"
import { AddPartnerOppeningDTO } from "../validation/add-partner-oppening.schema"
import { UpdateQualifiedOppeningDTO } from "../validation/update-qualified-oppening.schema"

export const createdPartnerJoppings = async (data: AddPartnerOppeningDTO) => {
  const response = await axios.post("/vagas/revendedores", data)
  return response.data
}
export const updatedPartnerJoppings = async (
  data: UpdateQualifiedOppeningDTO
) => {
  const response = await axios.put(`/vagas/revendedores/${data.id}`, data)
  return response.data
}
export const deletedPartnerJoppings = async (id: string) => {
  const response = await axios.delete(`/vagas/revendedores/${id}`)
  return response.data
}
export const fetchManydPartnerJoppings = async () => {
  const response = await axios.get("/vagas/revendedores")
  return response.data
}
