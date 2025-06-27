export const LotteryResultNameEnum = {
    FEZADA:"fezada",
    AQUECEU:"aqueceu",
    KAZOLA:"kazola",
    ESKEBRA:"eskebra",
}

export type LotteryResultName = typeof LotteryResultNameEnum[keyof typeof LotteryResultNameEnum]