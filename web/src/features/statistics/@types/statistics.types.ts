export type Stats = {
    sortedNumber: number
    sortedTimes: number
  }
  
  export type StatisticEntity = {
    id: string
    file: string
    statsData: Stats[]
    createdAt: Date
  }