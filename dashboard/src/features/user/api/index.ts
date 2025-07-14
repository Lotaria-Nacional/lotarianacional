import axios from "@/lib/axios"
import { UserEntity } from "../types"
import { APIResponseMessage } from "@/shared/@types/api-response-message"

export type AddUserRequest = Omit<
  UserEntity,
  "id" | "createdAt" | "profilePic"
> & { password: string; profilePic: File | null }

export type UpdateUserRequest = {
  // data:Partial<UserEntity>
  id: string
  data: FormData
}

/*  ################## FUNCTIONS ############### */

export async function addUser(data: FormData): Promise<APIResponseMessage> {
  const response = await axios.post("/users", data)
  return response.data
}

export async function updateUser({
  data,
  id,
}: UpdateUserRequest): Promise<APIResponseMessage> {
  const response = await axios.put(`/users/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}

export async function removeUser(id: string): Promise<APIResponseMessage> {
  const response = await axios.delete(`/users/${id}`)
  return response.data
}

export async function getUserByIdUser(id: string): Promise<UserEntity> {
  const response = await axios.get(`/users/${id}`)
  return response.data
}

export async function getAllUsers(): Promise<UserEntity[]> {
  const response = await axios.get("/users")
  return response.data
}
