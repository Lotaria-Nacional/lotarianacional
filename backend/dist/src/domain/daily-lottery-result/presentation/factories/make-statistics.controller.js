"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStatisticsController = makeStatisticsController;
const fetch_many_statistics_controlller_1 = require("../controllers/statistics/fetch-many-statistics.controlller");
const fetch_many_statistics_useCase_1 = require("../../application/use-cases/statistics/fetch-many-statistics.useCase");
function makeStatisticsController(statisticsRepo) {
    const fetchManyStatistics = new fetch_many_statistics_controlller_1.FetchManyStatisticsController(new fetch_many_statistics_useCase_1.FetchManyStatisticsUseCase(statisticsRepo));
    return {
        fetchManyStatistics
    };
}
//# sourceMappingURL=make-statistics.controller.js.map