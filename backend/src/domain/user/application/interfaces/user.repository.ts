import { User } from "../../enterprise/entities/user"

export interface IUserRepository {
  save(user: User): Promise<void>
  getAll(): Promise<User[]>
  getById(id: string): Promise<User | null>
  getByEmail(email: string): Promise<User | null>
  update(id: string, user: Partial<User>): Promise<User>
  delete(id: string): Promise<void>
}
