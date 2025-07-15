"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const prisma_partner_job_oppening_repository_1 = require("../../infra/repository/prisma-partner-job-oppening.repository");
const make_partner_job_oppening_controllers_1 = require("../factories/make-partner-job-oppening-controllers");
const partnerJobOppeningRoutes = (0, express_1.Router)();
const repository = new prisma_partner_job_oppening_repository_1.PrismaPartnerJobOppeningRepository();
const { create, fetchMany, getById, remove, update } = (0, make_partner_job_oppening_controllers_1.makePartnerJobOppeningControllers)(repository);
partnerJobOppeningRoutes.post("/", (0, express_adapter_controller_1.expressAdapterController)(create));
partnerJobOppeningRoutes.put("/:id", (0, express_adapter_controller_1.expressAdapterController)(update));
partnerJobOppeningRoutes.delete("/:id", (0, express_adapter_controller_1.expressAdapterController)(remove));
partnerJobOppeningRoutes.get("/:id", (0, express_adapter_controller_1.expressAdapterController)(getById));
partnerJobOppeningRoutes.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchMany));
exports.default = partnerJobOppeningRoutes;
//# sourceMappingURL=partner-job-oppening.routes.js.map