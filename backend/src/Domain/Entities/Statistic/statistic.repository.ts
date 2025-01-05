import { Statistic } from "./statistic"

export interface IStatisticRepository {
  save(data: Statistic): Promise<void>
  get(): Promise<Statistic | null>
  delete(id:string): Promise<void>
}
