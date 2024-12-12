"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_agency_repository_1 = require("../../repositories/prisma/prisma.agency.repository");
const get_agencies_useCase_1 = require("../../../application/useCases/agency/get.agencies.useCase");
const get_agencies_controller_1 = require("../controllers/agencyControllers/get.agencies.controller");
const create_agency_useCase_1 = require("../../../application/useCases/agency/create.agency.useCase");
const create_agency_controller_1 = require("../controllers/agencyControllers/create.agency.controller");
const get_agencyById_useCase_1 = require("../../../application/useCases/agency/get.agencyById.useCase");
const get_agenctById_controller_1 = require("../controllers/agencyControllers/get.agenctById.controller");
const update_agency_controller_1 = require("../controllers/agencyControllers/update.agency.controller");
const update_agency_useCase_1 = require("../../../application/useCases/agency/update.agency.useCase");
const delete_agency_controller_1 = require("../controllers/agencyControllers/delete.agency.controller");
const delete_agency_useCase_1 = require("../../../application/useCases/agency/delete.agency.useCase");
const router = (0, express_1.Router)();
const prismaAgencyRepository = new prisma_agency_repository_1.PrismaAgencyRepository();
//CREATE
const createAgencyUseCase = new create_agency_useCase_1.CreateAgencyUseCase(prismaAgencyRepository);
const createAgencyController = new create_agency_controller_1.CreateAgencyController(createAgencyUseCase);
//GET ALL
const getAgenciesUseCase = new get_agencies_useCase_1.GetAgenciesUseCase(prismaAgencyRepository);
const getAgenciesController = new get_agencies_controller_1.GetAgenciesController(getAgenciesUseCase);
//GET BY ID
const getAgencyByIdUseCase = new get_agencyById_useCase_1.GetAgencyByIdUseCase(prismaAgencyRepository);
const getAgencyByIdController = new get_agenctById_controller_1.GetAgencyByIdController(getAgencyByIdUseCase);
//UPDATE
const updateAgencyUseCase = new update_agency_useCase_1.UpdateAgencyUseCase(prismaAgencyRepository);
const updateAgencyController = new update_agency_controller_1.UpdateAgencyController(updateAgencyUseCase);
//DELETE
const deleteAgencyUseCase = new delete_agency_useCase_1.DeleteAgencyUseCase(prismaAgencyRepository);
const deleteAgencyController = new delete_agency_controller_1.DeleteAgencyController(deleteAgencyUseCase);
router.post("/agency", (req, res) => {
    createAgencyController.handle(req, res);
});
router.get("/agencies", (req, res) => {
    getAgenciesController.handle(req, res);
});
router.get("/agency/:id", (req, res) => {
    getAgencyByIdController.handle(req, res);
});
router.put("/agency/:id", (req, res) => {
    updateAgencyController.handle(req, res);
});
router.delete("/agency/:id", (req, res) => {
    deleteAgencyController.handle(req, res);
});
exports.default = router;
