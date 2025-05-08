export type Stats = {
  sortedNumber: number
  sortedTimes: number
}

export type StatisticEntity = {
  id: string
  file: string
  createdAt: Date
  statsData: Stats[]
}
