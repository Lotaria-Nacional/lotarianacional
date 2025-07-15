import axios from "@/lib/axios"
import { UpdateQualifiedOppeningDTO } from "../validation/update-qualified-oppening.schema"
import { AddQualifiedOppeningType } from "../validation/add-qualified-oppening.schema"

export const createJobOppening = async (data: AddQualifiedOppeningType) => {
  const response = await axios.post("/vagas", data)
  return response.data
}
export const updateJobOppening = async (data: UpdateQualifiedOppeningDTO) => {
  const response = await axios.put(`/vagas/${data.id}`, data)
  return response.data
}
export const deleteJobOppening = async (id: string) => {
  const response = await axios.delete(`/vagas/${id}`)
  return response.data
}
export const fetchManyJobOppening = async () => {
  const response = await axios.get("/vagas")
  return response.data
}
