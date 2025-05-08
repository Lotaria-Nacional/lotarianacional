export interface DailyResultEntity {
  id: string
  date: Date
  formatedDate: string
  results: ResultEntity[]
}

export interface ResultEntity {
  id: string
  name: string
  hour: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
  videoURL: string | null
  createdAt: Date
}

export type CreateResult = {
  name: string
  hour: string
  videoURL: string
  numbers: number[]
}

export type ResultName = "fezada" | "aqueceu" | "kazola" | "eskebra"
export type ResultHour = "10H00" | "13H00" | "16H00" | "19H00"