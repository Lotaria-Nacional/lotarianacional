import axios from "@/lib/axios"
import { CreateResult, DailyResultEntity } from "../types"

export type CreateResultRequest = Omit<CreateResult, "numbers"> & {
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
}

export type CreateResultResponse = {
  message: string
}

export type UpdateResultRequest = Partial<CreateResultRequest> & {
  id: string
  videoURL: string | null
}

/* ########## FUNCTIONS ############ */

export async function createResult(
  data: CreateResultRequest
): Promise<{ message: string }> {
  const response = await axios.post("/daily-lottery-results", data)
  return response.data
}

export async function getLastResults(): Promise<DailyResultEntity> {
  const response = await axios.get("/daily-lottery-results/last")
  return response.data
}

export async function getAllResults(): Promise<DailyResultEntity[]> {
  const response = await axios.get("/daily-lottery-results")
  return response.data
}

export async function getTotalResults(): Promise<{ total: number }> {
  const response = await axios.get("/lottery-results")
  return response.data
}

export async function updateResult(
  data: UpdateResultRequest
): Promise<{ message: string }> {
  const response = await axios.put(`/lottery-results/${data.id}`, data)
  return response.data
}

export async function deleteResult(id: string): Promise<{ message: string }> {
  const response = await axios.delete(`/daily-lottery-results/${id}`)
  return response.data
}
