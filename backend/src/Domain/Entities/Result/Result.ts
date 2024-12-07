export type ResultProps = {
  id?: string
  name: string
  hour: number
  minute: number
  sorted_number_1: number
  sorted_number_2: number
  sorted_number_3: number
  sorted_number_4: number
  sorted_number_5: number
  createdAt?: Date
}

export class Result {
  public readonly id?: string
  public name: string
  public hour: number
  public minute: number
  public sorted_number_1: number
  public sorted_number_2: number
  public sorted_number_3: number
  public sorted_number_4: number
  public sorted_number_5: number
  public createdAt: Date

  constructor(props: ResultProps) {
    this.id = props.id
    this.name = props.name
    this.hour = props.hour
    this.minute = props.minute
    this.sorted_number_1 = props.sorted_number_1
    this.sorted_number_2 = props.sorted_number_2
    this.sorted_number_3 = props.sorted_number_3
    this.sorted_number_4 = props.sorted_number_4
    this.sorted_number_5 = props.sorted_number_5
    this.createdAt = props.createdAt ?? new Date()
  }

  static create(props: ResultProps) {
    return new Result(props)
  }

  update(data: {
    sorted_number_1?: number
    sorted_number_2?: number
    sorted_number_3?: number
    sorted_number_4?: number
    sorted_number_5?: number
  }): void {
    if (data.sorted_number_1) this.sorted_number_1 = data.sorted_number_1
    if (data.sorted_number_2) this.sorted_number_2 = data.sorted_number_2
    if (data.sorted_number_3) this.sorted_number_3 = data.sorted_number_3
    if (data.sorted_number_4) this.sorted_number_4 = data.sorted_number_4
    if (data.sorted_number_5) this.sorted_number_5 = data.sorted_number_5
  }
}
