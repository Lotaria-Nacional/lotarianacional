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
    this.file = props.file
    this.createdAt = props.createdAt ?? new Date()
    this.statsData = props.statsData
  }

  static create(data: StatisticProps): Statistic {
    if (!data.file || typeof data.file !== "string") {
      throw new Error("O ficheiro excel é obrigatório e deve ser uma string.")
    }
    return new Statistic(data)
  }
}
