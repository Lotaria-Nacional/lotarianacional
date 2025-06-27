import { User } from "../../enterprise/entities/user"

export interface IUserRepository {
  create(user: User): Promise<void>
  save(user: Partial<User>): Promise<User>
  delete(id: string): Promise<void>
  getAll(): Promise<User[]>
  getById(id: string): Promise<User | null>
  getByEmail(email: string): Promise<User | null>
}
