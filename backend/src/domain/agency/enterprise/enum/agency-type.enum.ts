export const AgencyEnum = {
    LOTARIA_NACIONAL:"lotaria-nacional", 
    ELEPHANT_BET:"elephant-bet",
    ARREIOU:"arreiou"
} as const

export type AgencyType = typeof AgencyEnum[keyof typeof AgencyEnum]