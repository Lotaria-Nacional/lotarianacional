export type DailyLotteryResultEntity = {
    id: string
    date: Date
    formatedDate: string
    results: LotteryResultEntity[]
  }
  
  export type LotteryResultEntity = {
    id: string
    name: string
    hour: string
    number_1: number
    number_2: number
    number_3: number
    number_4: number
    number_5: number
    videoURL: string
    createdAt: Date
  }