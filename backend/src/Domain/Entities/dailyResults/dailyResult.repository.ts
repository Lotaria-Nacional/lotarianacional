import { DailyResult } from "./dailyResult"

export interface IDailyResultRespository {
  save(dailyResult: DailyResult): Promise<void>
  update(dailyResult: DailyResult): Promise<void>
  getByDate(date: string): Promise<DailyResult | null>
  getById(id: string): Promise<DailyResult | null>
  getAll(): Promise<DailyResult[]>
  delete(id: string): Promise<void>
  getLast(): Promise<DailyResult | null>
}
