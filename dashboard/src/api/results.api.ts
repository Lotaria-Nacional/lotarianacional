import axios from "../config/axios"
import { IDailyResult } from "../interfaces"

type UpdateNumbersDTO = {
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
}

export const getResults = async (): Promise<IDailyResult[]> => {
  const response = await axios.get("/results")
  return response.data
}

export const updateResults = async (
  id: string,
  data: UpdateNumbersDTO
): Promise<{ message: string }> => {
  const response = await axios.put(`/result/${id}`, {
    number_1: data.number_1,
    number_2: data.number_2,
    number_3: data.number_3,
    number_4: data.number_4,
    number_5: data.number_5,
  })
  const { message } = response.data
  return message
}
