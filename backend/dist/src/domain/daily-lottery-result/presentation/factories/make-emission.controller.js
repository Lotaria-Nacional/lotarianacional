"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEmissionController = makeEmissionController;
const fetch_many_emissions_controller_1 = require("../controllers/emission/fetch-many-emissions.controller");
const fetch_many_emissionUseCase_1 = require("../../application/use-cases/emission/fetch-many-emissionUseCase");
function makeEmissionController(emissionRepo) {
    const fetchEmissions = new fetch_many_emissions_controller_1.FetchManyEmissionsController(new fetch_many_emissionUseCase_1.FetchManyEmissionUseCase(emissionRepo));
    return {
        fetchEmissions
    };
}
//# sourceMappingURL=make-emission.controller.js.map