"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const make_job_oppening_controllers_1 = require("../factories/make-job-oppening-controllers");
const prisma_job_oppening_repository_1 = require("../../infra/repository/prisma-job-oppening.repository");
const jobOppeningRoutes = (0, express_1.Router)();
const repository = new prisma_job_oppening_repository_1.PrismaJobOppeningRepository();
const { create, fetchMany, getById, remove, update } = (0, make_job_oppening_controllers_1.makeJobOppeningControllers)(repository);
jobOppeningRoutes.post("/", (0, express_adapter_controller_1.expressAdapterController)(create));
jobOppeningRoutes.put("/:id", (0, express_adapter_controller_1.expressAdapterController)(update));
jobOppeningRoutes.delete("/:id", (0, express_adapter_controller_1.expressAdapterController)(remove));
jobOppeningRoutes.get("/:id", (0, express_adapter_controller_1.expressAdapterController)(getById));
jobOppeningRoutes.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchMany));
exports.default = jobOppeningRoutes;
//# sourceMappingURL=job-oppening.routes.js.map