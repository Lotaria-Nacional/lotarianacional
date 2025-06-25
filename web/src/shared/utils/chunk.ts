import { DailyLotteryResultEntity } from "@/features/lottery-result/@types/lottery-result.types"

export const chunkArray = (array: DailyLotteryResultEntity[], size: number) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size))
    return acc
  }, [] as (typeof array)[])
}