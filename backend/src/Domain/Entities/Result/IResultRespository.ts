import { Result } from "./Result"

export interface IResultRepository {
  getAll(): Promise<Result[]>
  delete(id: string): Promise<void>
  save(result: Result): Promise<void>
  getById(id: string): Promise<Result | null>
  update(id: string, data: Partial<Result>): Promise<Result | null>
}
