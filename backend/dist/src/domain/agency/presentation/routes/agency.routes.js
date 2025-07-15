"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = require("../../../../main/container/repositories");
const make_agency_controllers_1 = require("../factories/make-agency-controllers");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const agencyRouter = (0, express_1.Router)();
const { createAgency, deleteAgency, fetchManyAgencies, getAgencyById, updateAgency } = (0, make_agency_controllers_1.agencyControllerFactory)(repositories_1.agencyRepository);
agencyRouter.post("/agency", (0, express_adapter_controller_1.expressAdapterController)(createAgency));
agencyRouter.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchManyAgencies));
agencyRouter.get("/:id", (0, express_adapter_controller_1.expressAdapterController)(getAgencyById));
agencyRouter.put("/:id", (0, express_adapter_controller_1.expressAdapterController)(updateAgency));
agencyRouter.delete("/:id", (0, express_adapter_controller_1.expressAdapterController)(deleteAgency));
exports.default = agencyRouter;
//# sourceMappingURL=agency.routes.js.map