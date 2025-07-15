"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDailyLotteryResults = makeDailyLotteryResults;
const create_daily_lottery_result_controller_1 = require("../controllers/daily-lottery-result/create-daily-lottery-result.controller");
const delete_daily_lottery_result_controller_1 = require("../controllers/daily-lottery-result/delete-daily-lottery-result.controller");
const get_last_daily_lottery_result_controller_1 = require("../controllers/daily-lottery-result/get-last-daily-lottery-result.controller");
const delete_daily_lottery_result_useCase_1 = require("../../application/use-cases/daily-lottery-result/delete-daily-lottery-result.useCase");
const create_daily_lottery_result_useCase_1 = require("../../application/use-cases/daily-lottery-result/create-daily-lottery-result.useCase");
const get_last_daily_lottery_result_useCase_1 = require("../../application/use-cases/daily-lottery-result/get-last-daily-lottery-result.useCase");
const fetch_many_daily_lottery_results_controller_1 = require("../controllers/daily-lottery-result/fetch-many-daily-lottery-results.controller");
const fetch_manny_daily_lottery_result_useCase_1 = require("../../application/use-cases/daily-lottery-result/fetch-manny-daily-lottery-result.useCase");
function makeDailyLotteryResults(dailyResultRepository, emissionRepo, numberStatisticsService) {
    const createDailyLotteryResult = new create_daily_lottery_result_controller_1.CreateDailyResultsController(new create_daily_lottery_result_useCase_1.CreateDailyResultUseCase(dailyResultRepository, emissionRepo, numberStatisticsService));
    const fetchManyDailyLotteryResults = new fetch_many_daily_lottery_results_controller_1.FetchManyDailyLotteryResultsController(new fetch_manny_daily_lottery_result_useCase_1.FetchManyDailyLotteryResultsUseCase(dailyResultRepository));
    const deleteDailyLotteryResults = new delete_daily_lottery_result_controller_1.DeleteDailyResultsController(new delete_daily_lottery_result_useCase_1.DeleteDailyResultUseCase(dailyResultRepository));
    const getLastDailyLotteryResults = new get_last_daily_lottery_result_controller_1.GetLastDailyResultController(new get_last_daily_lottery_result_useCase_1.GetLastDailyResultUseCase(dailyResultRepository));
    return {
        createDailyLotteryResult,
        fetchManyDailyLotteryResults,
        deleteDailyLotteryResults,
        getLastDailyLotteryResults
    };
}
//# sourceMappingURL=make-daily-lottery-results.controller.js.map