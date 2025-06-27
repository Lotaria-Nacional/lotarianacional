import { IAgencyRespository } from "@/domain/agency/application/interfaces/agency-respository.interface";
import { PrismaAgencyRepository } from "@/domain/agency/infrastructure/repositories/prisma/prisma-agency.repository";
import { IDailyLotteryResultRespository } from "@/domain/daily-lottery-result/application/interfaces/daily-lottery-result.repository";
import { IEmissionRepository } from "@/domain/daily-lottery-result/application/interfaces/emission.repository";
import { ILotteryResultRepository } from "@/domain/daily-lottery-result/application/interfaces/lottery-result.respository";
import { IStatisticRepository } from "@/domain/daily-lottery-result/application/interfaces/statistic.repository";
import { PrismaDailyLotteryResultsRespository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma-daily-lottery-result.respository";
import { PrismaEmissionRepository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.emission.repository";
import { PrismaLotteryResultRespository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.result.repository";
import { PrismaStatisticRepository } from "@/domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.statistic.repository";
import { INewsRespository } from "@/domain/news/application/interfaces/news.repository";
import { PrismaNewsRespository } from "@/domain/news/infrastructure/repositories/prisma/prisma.news.repository";
import { IUserRepository } from "@/domain/user/application/interfaces/user.repository";
import { PrismaUserRespository } from "@/domain/user/infrastructure/repositories/prisma/prisma.user.repository";
import { Prisma } from "@prisma/client";
 

export class UnitOfWork {
    public agency:IAgencyRespository
    public dailyLotteryResult:IDailyLotteryResultRespository
    public lotteryResult:ILotteryResultRepository
    public emission:IEmissionRepository
    public statistic:IStatisticRepository
    public news:INewsRespository
    public user:IUserRepository

    constructor(private tx:Prisma.TransactionClient){
        this.agency = new PrismaAgencyRepository(tx)
        this.dailyLotteryResult = new PrismaDailyLotteryResultsRespository(tx)
        this.lotteryResult = new PrismaLotteryResultRespository(tx)
        this.emission = new PrismaEmissionRepository(tx)
        this.statistic = new PrismaStatisticRepository(tx)
        this.news = new PrismaNewsRespository(tx)
        this.user = new PrismaUserRespository(tx)
    }
}