import { LotteryResult } from "./lottery-result"

export type DailyResultProps = {
  id?: string
  date?: Date
  createdAt?: Date
  results: LotteryResult[]
  formatedDate: string
}

export class DailyLotteryResult {
  public id?: string
  public date?: Date
  createdAt?: Date
  public results: LotteryResult[]
  public formatedDate: string

  constructor(props: DailyResultProps) {
    this.id = props.id
    this.results = props.results
    this.date = props.date ?? new Date()
    this.formatedDate = props.formatedDate
  }

  static create(props: DailyResultProps) {
    return new DailyLotteryResult(props)
  }
}
