import { DailyResultProps } from "@/domain/daily-lottery-result/enterprise/entities/daily-lottery-result"

export type DailyResultForExcel = DailyResultProps

export interface IExcelService {
  generateAndSaveExcel(): Promise<void>
}
