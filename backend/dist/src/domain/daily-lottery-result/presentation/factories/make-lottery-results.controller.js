"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLotteryResultController = makeLotteryResultController;
const create_lottery_result_controller_1 = require("../controllers/lottery-result/create-lottery-result.controller");
const update_lottery_result_controller_1 = require("../controllers/lottery-result/update-lottery-result.controller");
const delete_lottery_result_controller_1 = require("../controllers/lottery-result/delete-lottery-result.controller");
const create_lottery_result_useCase_1 = require("../../application/use-cases/lottery-result/create-lottery-result.useCase");
const update_lottery_result_useCase_1 = require("../../application/use-cases/lottery-result/update-lottery-result.useCase");
const delete_lottery_result_useCase_1 = require("../../application/use-cases/lottery-result/delete-lottery-result.useCase");
const fetch_many_lottery_results_controller_1 = require("../controllers/lottery-result/fetch-many-lottery-results.controller");
const fetch_many_lottery_result_useCase_1 = require("../../application/use-cases/lottery-result/fetch-many-lottery-result.useCase");
function makeLotteryResultController(resultRepository, emissionRepo) {
    const createLotteryResult = new create_lottery_result_controller_1.CreateLotteryResultController(new create_lottery_result_useCase_1.CreateLotteryResultUseCase(resultRepository));
    const updateLotteryResult = new update_lottery_result_controller_1.UpdateLotteryResultController(new update_lottery_result_useCase_1.UpdateLotteryResultUseCase(resultRepository, emissionRepo));
    const removeLotteryResult = new delete_lottery_result_controller_1.DeleteLotteryResultController(new delete_lottery_result_useCase_1.DeleteLotteryResultUseCase(resultRepository));
    const fetchManyLotteryResult = new fetch_many_lottery_results_controller_1.FetchManyLotteryResultsController(new fetch_many_lottery_result_useCase_1.FetchManyLotteryResultsUseCase(resultRepository));
    return {
        createLotteryResult,
        updateLotteryResult,
        removeLotteryResult,
        fetchManyLotteryResult
    };
}
//# sourceMappingURL=make-lottery-results.controller.js.map