"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = require("../../../../main/container/repositories");
const make_emission_controller_1 = require("../factories/make-emission.controller");
const express_adapter_controller_1 = require("../../../../core/adapters/express-adapter-controller");
const emissionRouter = (0, express_1.Router)();
const { fetchEmissions } = (0, make_emission_controller_1.makeEmissionController)(repositories_1.emissionRepo);
emissionRouter.get("/", (0, express_adapter_controller_1.expressAdapterController)(fetchEmissions));
exports.default = emissionRouter;
//# sourceMappingURL=emissions.route.js.map