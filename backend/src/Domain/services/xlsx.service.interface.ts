import { DailyResultProps } from "../Entities/dailyResults/dailyResult"

export type DailyResultForExcel = DailyResultProps

export interface IExcelService {
  generateAndSaveExcel(): Promise<void>
}
