"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePartnerJobOppeningControllers = makePartnerJobOppeningControllers;
const create_partner_job_oppening_useCase_1 = require("../../application/use-cases/partner-job-oppening/create-partner-job-oppening.useCase");
const delete_partner_job_oppening_useCase_1 = require("../../application/use-cases/partner-job-oppening/delete-partner-job-oppening.useCase");
const fetch_many_partner_job_oppenings_useCase_1 = require("../../application/use-cases/partner-job-oppening/fetch-many-partner-job-oppenings.useCase");
const get_partner_job_oppening_by_id_useCase_1 = require("../../application/use-cases/partner-job-oppening/get-partner-job-oppening-by-id.useCase");
const update_partner_job_oppening_useCase_1 = require("../../application/use-cases/partner-job-oppening/update-partner-job-oppening.useCase");
const create_partner_job_oppening_controller_1 = require("../controllers/partner-controllers/create-partner-job-oppening.controller");
const delete_partner_job_oppening_controller_1 = require("../controllers/partner-controllers/delete-partner-job-oppening.controller");
const fetch_many_partner_job_oppenings_controller_1 = require("../controllers/partner-controllers/fetch-many-partner-job-oppenings.controller");
const get_partner_job_oppening_by_id_controller_1 = require("../controllers/partner-controllers/get-partner-job-oppening-by-id.controller");
const update_partner_job_oppening_controller_1 = require("../controllers/partner-controllers/update-partner-job-oppening.controller");
function makePartnerJobOppeningControllers(repository) {
    const create = new create_partner_job_oppening_controller_1.CreatePartnerJobOppeningController(new create_partner_job_oppening_useCase_1.CreatePartnerJobOppeningUseCase(repository));
    const update = new update_partner_job_oppening_controller_1.UpdatePartnerJobOppeningController(new update_partner_job_oppening_useCase_1.UpdatePartnerJobOppeningUseCase(repository));
    const remove = new delete_partner_job_oppening_controller_1.DeletePartnerJobOppeningController(new delete_partner_job_oppening_useCase_1.DeletePartnerJobOppeningUseCase(repository));
    const getById = new get_partner_job_oppening_by_id_controller_1.GetPartnerJobOppeningByIdController(new get_partner_job_oppening_by_id_useCase_1.GetPartnerJobOppeningByIdUseCase(repository));
    const fetchMany = new fetch_many_partner_job_oppenings_controller_1.FetchManyPartnerJobOppeningsController(new fetch_many_partner_job_oppenings_useCase_1.FetchManyPartnerJobOppeningsUseCase(repository));
    return {
        create,
        update,
        remove,
        getById,
        fetchMany,
    };
}
//# sourceMappingURL=make-partner-job-oppening-controllers.js.map