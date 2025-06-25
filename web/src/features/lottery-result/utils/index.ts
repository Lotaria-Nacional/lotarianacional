import { MONTHS_MAP } from "@/app/constants/months"
import { currentDateFormated } from "@/shared/utils/daily-result"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"

export const checkIsToday = (data: DailyLotteryResultEntity) => {
    const placeholdersCount = handlePlaceholderCount(data)
    const formattedToday = currentDateFormated()
    
    const parts = data.formatedDate.split(",")[1].trim().split(" ")
    const day = parts[0].padStart(2, "0")
    const month = MONTHS_MAP[parts[2]]
    const year = parts[4]
    const formattedDataDate = `${day}/${month}/${year}`
  
    const isToday = formattedDataDate === formattedToday
  
    return { placeholdersCount, isToday }
  }
  
  export const handlePlaceholderCount = (data: DailyLotteryResultEntity) => {
    const TOTAL_RESULTS = 4
    const totalResults = data.results.length
    return TOTAL_RESULTS - totalResults
  }