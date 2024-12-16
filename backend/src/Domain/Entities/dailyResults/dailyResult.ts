import { Result } from "../Result/Result"

export type DailyResultProps = {
  id?: string
  date?: Date
  createdAt?: Date
  results: Result[]
  formatedDate: string
}

export class DailyResult {
  public id?: string
  public date?: Date
  createdAt?: Date
  public results: Result[]
  public formatedDate: string

  constructor(props: DailyResultProps) {
    this.id = props.id
    this.results = props.results
    this.date = props.date ?? new Date()
    this.formatedDate = props.formatedDate
  }

  static create(props: DailyResultProps) {
    return new DailyResult(props)
  }
}
