import axios from "../config/axios"
import { IDailyResult } from "../interfaces"

type UpdateNumbersDTO = {
  videoURL: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
}

export type CreateDailyResult = {
  name: string
  hour: string
  videoURL: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
}

export const createDailyResult = async (
  data: CreateDailyResult
): Promise<{ message: string }> => {
  const response = await axios.post("/daily-result", data)
  return response.data
}

export const getDailyResults = async (): Promise<IDailyResult[]> => {
  const response = await axios.get("/daily-results")
  return response.data
}

export const getResults = async (): Promise<{ total: number }> => {
  const response = await axios.get("/results")
  return response.data
}

export const getLastDailyResult = async (): Promise<IDailyResult> => {
  const response = await axios.get("/last-daily-result")
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

  return response.data
}

export const deleteDailyResult = async (
  id: string
): Promise<{ message: string }> => {
  const response = await axios.delete(`/daily-result/${id}`)
  return response.data
}
