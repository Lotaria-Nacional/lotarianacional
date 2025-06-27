export const LotteryResultHourEnum = {
    10:"10h00",
    13:"13h00",
    16:"16h00",
    19:"19h00",
}

export type LotteryResultHour = typeof LotteryResultHourEnum[keyof typeof LotteryResultHourEnum]