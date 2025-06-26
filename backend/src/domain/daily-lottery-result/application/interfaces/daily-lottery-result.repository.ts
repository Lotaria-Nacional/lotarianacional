import { DailyLotteryResult } from "../../enterprise/entities/daily-lottery-result"

export interface IDailyLotteryResultRespository {
  create(dailyResult: DailyLotteryResult): Promise<void>
  save(dailyResult: DailyLotteryResult): Promise<void>
  delete(id: string): Promise<void>
  getByDate(date: string): Promise<DailyLotteryResult | null>
  getById(id: string): Promise<DailyLotteryResult | null>
  getAllWithFilter(date?: string): Promise<DailyLotteryResult[]>
  fetchMany(): Promise<DailyLotteryResult[]>
  getLast(): Promise<DailyLotteryResult | null>
}
