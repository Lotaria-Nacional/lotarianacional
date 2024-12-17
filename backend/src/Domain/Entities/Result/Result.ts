export type ResultProps = {
  id?: string
  hour: string
  name: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
  dailyId?: string
  videoURL: string
  createdAt?: Date
}
export type UpdateNumberInputDTO = {
  number_1?: number
  number_2?: number
  number_3?: number
  number_4?: number
  number_5?: number
}

export class Result {
  public readonly id?: string
  public readonly dailyId?: string
  public name: string
  public hour: string
  public videoURL: string
  public number_1: number
  public number_2: number
  public number_3: number
  public number_4: number
  public number_5: number
  public createdAt: Date

  constructor(props: ResultProps) {
    this.id = props.id
    this.dailyId = props.dailyId
    this.name = props.name
    this.hour = props.hour
    this.videoURL = props.videoURL
    this.number_1 = props.number_1
    this.number_2 = props.number_2
    this.number_3 = props.number_3
    this.number_4 = props.number_4
    this.number_5 = props.number_5
    this.createdAt = props.createdAt ?? new Date()
  }

  static create(props: ResultProps) {
    return new Result(props)
  }

  update(
    videoURL?: string,
    number_1?: number,
    number_2?: number,
    number_3?: number,
    number_4?: number,
    number_5?: number
  ): void {
    if (videoURL) this.videoURL = videoURL
    if (number_1) this.number_1 = number_1
    if (number_2) this.number_2 = number_2
    if (number_3) this.number_3 = number_3
    if (number_4) this.number_4 = number_4
    if (number_5) this.number_5 = number_5
  }
}
