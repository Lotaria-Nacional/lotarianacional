import { PrismaNewsRespository } from "@/domain/news/infrastructure/repositories/prisma/prisma.news.repository";
import { prisma } from "../config/prisma";
import { PrismaUserRespository } from "@/domain/user/infrastructure/repositories/prisma/prisma.user.repository";
import { PrismaAgencyRepository } from "@/domain/agency/infrastructure/repositories/prisma/prisma-agency.repository";
import { NumberStatisticService } from "@/domain/daily-lottery-result/application/use-cases/statistics/create-statistics.useCase";
import { PrismaDailyLotteryResultsRespository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma-daily-lottery-result.respository";
import { PrismaEmissionRepository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.emission.repository";
import { PrismaLotteryResultRespository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.result.repository";
import { PrismaStatisticRepository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.statistic.repository";

export const newsRepository = new PrismaNewsRespository(prisma)
export const userRepository = new PrismaUserRespository(prisma)
export const emissionRepo = new PrismaEmissionRepository(prisma);
export const agencyRepository = new PrismaAgencyRepository(prisma)
export const statisticRespo = new PrismaStatisticRepository(prisma)
export const lotteryResultRepo = new PrismaLotteryResultRespository(prisma);
export const dailyResultRepo = new PrismaDailyLotteryResultsRespository(prisma);
export const statisticService = new NumberStatisticService(dailyResultRepo,statisticRespo)