import { UserEntity } from "@/features/user/types"
import axios from "@/lib/axios"

export type AuthUserEntityResponse = Omit<
  UserEntity,
  "firstName" | "lastName"
> & { name: string }

export type LoginResponse = {
  message: string
  user: AuthUserEntityResponse
  token: string
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post("/auth/login", { email, password })
  return response.data
}
