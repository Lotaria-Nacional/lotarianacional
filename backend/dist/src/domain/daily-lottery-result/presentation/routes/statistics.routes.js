"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = require("../../../../main/container/repositories");
const make_statistics_controller_1 = require("../factories/make-statistics.controller");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const statisticsRouter = (0, express_1.Router)();
const { fetchManyStatistics } = (0, make_statistics_controller_1.makeStatisticsController)(repositories_1.statisticRespo);
statisticsRouter.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchManyStatistics));
exports.default = statisticsRouter;
//# sourceMappingURL=statistics.routes.js.map