import axios from "../config/axios"
import { IUser } from "../interfaces"

export const getUsers = async (): Promise<IUser[]> => {
  const result = await axios.get("/users")
  return result.data
}
