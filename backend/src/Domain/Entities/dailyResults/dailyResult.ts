import { Result } from "../result/result"

export type DailyResultProps = {
  id?: string
  date: string
  results: Result[]
}

export class DailyResult {
  public id?: string
  public date: string
  public results: Result[]

  constructor(props: DailyResultProps) {
    this.id = props.id
    this.date = props.date
    this.results = props.results
  }

  static create(props: DailyResultProps) {
    return new DailyResult(props)
  }
}
