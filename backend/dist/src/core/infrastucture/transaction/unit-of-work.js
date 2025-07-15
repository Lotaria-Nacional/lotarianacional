"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfWork = void 0;
(";");
const prisma_agency_repository_1 = require("../../../domain/agency/infrastructure/repositories/prisma/prisma-agency.repository");
const prisma_daily_lottery_result_respository_1 = require("../../../domain/daily-lottery-result/infrastructure/repositories/prisma/prisma-daily-lottery-result.respository");
const prisma_emission_repository_1 = require("../../../domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.emission.repository");
const prisma_result_repository_1 = require("../../../domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.result.repository");
const prisma_statistic_repository_1 = require("../../../domain/daily-lottery-result/infrastructure/repositories/prisma/prisma.statistic.repository");
const prisma_news_repository_1 = require("../../../domain/news/infrastructure/repositories/prisma/prisma.news.repository");
const prisma_user_repository_1 = require("../../../domain/user/infrastructure/repositories/prisma/prisma.user.repository");
class UnitOfWork {
    tx;
    agency;
    dailyLotteryResult;
    lotteryResult;
    emission;
    statistic;
    news;
    user;
    constructor(tx) {
        this.tx = tx;
        this.agency = new prisma_agency_repository_1.PrismaAgencyRepository(tx);
        this.dailyLotteryResult = new prisma_daily_lottery_result_respository_1.PrismaDailyLotteryResultsRespository(tx);
        this.lotteryResult = new prisma_result_repository_1.PrismaLotteryResultRespository(tx);
        this.emission = new prisma_emission_repository_1.PrismaEmissionRepository(tx);
        this.statistic = new prisma_statistic_repository_1.PrismaStatisticRepository(tx);
        this.news = new prisma_news_repository_1.PrismaNewsRespository(tx);
        this.user = new prisma_user_repository_1.PrismaUserRespository(tx);
    }
}
exports.UnitOfWork = UnitOfWork;
//# sourceMappingURL=unit-of-work.js.map