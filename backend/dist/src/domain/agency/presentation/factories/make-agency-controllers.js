"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agencyControllerFactory = agencyControllerFactory;
const update_agency_controller_1 = require("../controllers/update-agency.controller");
const create_agency_controller_1 = require("../controllers/create-agency.controller");
const delete_agency_controller_1 = require("../controllers/delete-agency.controller");
const get_agency_by_id_controller_1 = require("../controllers/get-agency-by-id.controller");
const create_agency_useCase_1 = require("../../application/use-cases/create-agency.useCase");
const update_agency_useCase_1 = require("../../application/use-cases/update-agency.useCase");
const delete_agency_useCase_1 = require("../../application/use-cases/delete-agency.useCase");
const get_agency_by_id_useCase_1 = require("../../application/use-cases/get-agency-by-id.useCase");
const fetch_many_agencies_controller_1 = require("../controllers/fetch-many-agencies.controller");
const fetch_many_agencies_useCase_1 = require("../../application/use-cases/fetch-many-agencies.useCase");
function agencyControllerFactory(repository) {
    const createAgency = new create_agency_controller_1.CreateAgencyController(new create_agency_useCase_1.CreateAgencyUseCase(repository));
    const updateAgency = new update_agency_controller_1.UpdateAgencyController(new update_agency_useCase_1.UpdateAgencyUseCase(repository));
    const deleteAgency = new delete_agency_controller_1.DeleteAgencyController(new delete_agency_useCase_1.DeleteAgencyUseCase(repository));
    const getAgencyById = new get_agency_by_id_controller_1.GetAgencyByIdController(new get_agency_by_id_useCase_1.GetAgencyByIdUseCase(repository));
    const fetchManyAgencies = new fetch_many_agencies_controller_1.FetchManyAgenciesController(new fetch_many_agencies_useCase_1.FetchManyAgenciesUseCase(repository));
    return { createAgency, updateAgency, getAgencyById, deleteAgency, fetchManyAgencies };
}
//# sourceMappingURL=make-agency-controllers.js.map