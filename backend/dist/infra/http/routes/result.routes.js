"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_result_repository_1 = require("../../repositories/prisma/prisma.result.repository");
const create_result_useCase_1 = require("../../../application/useCases/result/create.result.useCase");
const get_results_useCase_1 = require("../../../application/useCases/result/get.results.useCase");
const update_result_useCase_1 = require("../../../application/useCases/result/update.result.useCase");
const delete_result_useCase_1 = require("../../../application/useCases/result/delete.result.useCase");
const create_result_controller_1 = require("../controllers/resultControllers/create.result.controller");
const get_results_controller_1 = require("../controllers/resultControllers/get.results.controller");
const update_result_controller_1 = require("../controllers/resultControllers/update.result.controller");
const delete_result_controller_1 = require("../controllers/resultControllers/delete.result.controller");
const prisma_dailyResults_respository_1 = require("../../repositories/prisma/prisma.dailyResults.respository");
const router = (0, express_1.Router)();
const prismaResultRepository = new prisma_result_repository_1.PrismaResultRespository();
const prismaDailyResultRepository = new prisma_dailyResults_respository_1.PrismaDailyResultsRespository();
const getResultsController = new get_results_controller_1.GetResultsController(new get_results_useCase_1.GetResultsUseCase(prismaDailyResultRepository));
const createResultController = new create_result_controller_1.CreateResultController(new create_result_useCase_1.CreateResultUseCase(prismaDailyResultRepository));
const updateResultController = new update_result_controller_1.UpdateResultController(new update_result_useCase_1.UpdateResultUseCase(prismaResultRepository));
const deleteResultController = new delete_result_controller_1.DeleteResultController(new delete_result_useCase_1.DeleteResultUseCase(prismaResultRepository));
router.post("/result", (req, res) => {
    createResultController.handle(req, res);
});
router.get("/results", (req, res) => {
    getResultsController.handle(req, res);
});
router.put("/result/:id", (req, res) => {
    updateResultController.handle(req, res);
});
router.delete("/result/:id", (req, res) => {
    deleteResultController.handle(req, res);
});
exports.default = router;
