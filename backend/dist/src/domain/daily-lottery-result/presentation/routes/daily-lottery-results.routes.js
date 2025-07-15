"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const make_daily_lottery_results_controller_1 = require("../factories/make-daily-lottery-results.controller");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const repositories_1 = require("../../../../main/container/repositories");
const dailyLotteryResultRouter = (0, express_1.Router)();
const { createDailyLotteryResult, deleteDailyLotteryResults, fetchManyDailyLotteryResults, getLastDailyLotteryResults } = (0, make_daily_lottery_results_controller_1.makeDailyLotteryResults)(repositories_1.dailyResultRepo, repositories_1.emissionRepo, repositories_1.statisticService);
dailyLotteryResultRouter.post("/", (0, express_adapter_controller_1.expressAdapterController)(createDailyLotteryResult));
dailyLotteryResultRouter.delete("/:id", (0, express_adapter_controller_1.expressAdapterController)(deleteDailyLotteryResults));
dailyLotteryResultRouter.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchManyDailyLotteryResults));
dailyLotteryResultRouter.get("/last", (0, express_adapter_controller_1.expressAdapterController)(getLastDailyLotteryResults));
exports.default = dailyLotteryResultRouter;
//# sourceMappingURL=daily-lottery-results.routes.js.map