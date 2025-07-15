"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = require("../../../../main/container/repositories");
const make_lottery_results_controller_1 = require("../factories/make-lottery-results.controller");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const lotteryResultRouter = (0, express_1.Router)();
const { createLotteryResult, fetchManyLotteryResult, removeLotteryResult, updateLotteryResult } = (0, make_lottery_results_controller_1.makeLotteryResultController)(repositories_1.lotteryResultRepo, repositories_1.emissionRepo);
lotteryResultRouter.post("/", (0, express_adapter_controller_1.expressAdapterController)(createLotteryResult));
lotteryResultRouter.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchManyLotteryResult));
lotteryResultRouter.put("/:id", (0, express_adapter_controller_1.expressAdapterController)(updateLotteryResult));
lotteryResultRouter.delete("/:id", (0, express_adapter_controller_1.expressAdapterController)(removeLotteryResult));
exports.default = lotteryResultRouter;
//# sourceMappingURL=lottery-result.routes.js.map