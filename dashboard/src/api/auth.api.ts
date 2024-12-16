import axios from "@/config/axios"
import { IUser } from "@/interfaces"

export type UserResponse = Omit<IUser, "firstName" | "lastName"> & {
  name: string
}

export type LoginResponse = {
  message: string
  user: UserResponse
  token: string
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post("/auth/login", { email, password })
  return response.data
}
