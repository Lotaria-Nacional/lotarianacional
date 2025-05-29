export type StatisticProps = {
  id?: string
  file: string
  createdAt?: Date
  statsData: any
}

export class Statistic {
  public readonly id?: string
  public readonly file: string
  public readonly createdAt?: Date
  public readonly statsData: any
  
  constructor(props: StatisticProps) {
    this.id = props.id
    this.file = "empty"
    this.createdAt = props.createdAt ?? new Date()
    this.statsData = props.statsData
  }

  static create(data: StatisticProps): Statistic {
    return new Statistic(data)
  }
}
