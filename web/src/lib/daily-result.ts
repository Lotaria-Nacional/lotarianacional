import { IDailyResult } from "@/interfaces"
import { MONTHS_MAP } from "@/constants/months"

export const checkIsToday = (data: IDailyResult) => {
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

export const handlePlaceholderCount = (data: IDailyResult) => {
  const TOTAL_RESULTS = 4
  const totalResults = data.results.length
  return TOTAL_RESULTS - totalResults
}

export const currentDateFormated = () => {
  const currentDate = new Date()
  return `${currentDate.getDate().toString().padStart(2, "0")}/${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`
}
