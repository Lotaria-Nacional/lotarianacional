import axios from "../config/axios"
import { IUser } from "../interfaces"

type CreateUserDTO = {
  email: string
  firstName: string
  lastName: string
  password: string
  role: string
}
type UpdateUserDTO = Partial<CreateUserDTO> & { id: string }

export const getUsers = async (): Promise<IUser[]> => {
  const result = await axios.get("/users")
  return result.data
}

export const getUser = async (id: string): Promise<IUser> => {
  const result = await axios.get(`/user/${id}`)
  return result.data
}

export const createUser = async (
  data: CreateUserDTO
): Promise<{ message: string }> => {
  const response = await axios.post("/user", data)
  return response.data
}

export const updateUser = async (
  data: UpdateUserDTO
): Promise<{ message: string }> => {
  const response = await axios.put(`/user/${data.id}`, data)
  return response.data
}

export const deleteUser = async (id: string): Promise<{ message: string }> => {
  const response = await axios.delete(`/user/${id}`)
  return response.data
}
