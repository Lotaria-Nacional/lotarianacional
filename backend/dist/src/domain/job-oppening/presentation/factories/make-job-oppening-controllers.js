"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeJobOppeningControllers = makeJobOppeningControllers;
const create_job_oppening_useCase_1 = require("../../application/use-cases/job-oppening/create-job-oppening.useCase");
const delete_job_oppening_useCase_1 = require("../../application/use-cases/job-oppening/delete-job-oppening.useCase");
const fetch_many_job_oppenings_useCase_1 = require("../../application/use-cases/job-oppening/fetch-many-job-oppenings.useCase");
const get_job_oppening_by_id_useCase_1 = require("../../application/use-cases/job-oppening/get-job-oppening-by-id.useCase");
const update_job_oppening_useCase_1 = require("../../application/use-cases/job-oppening/update-job-oppening.useCase");
const create_job_oppening_controller_1 = require("../controllers/job-oppening-controllers/create-job-oppening.controller");
const delete_job_oppening_controller_1 = require("../controllers/job-oppening-controllers/delete-job-oppening.controller");
const fetch_many_job_oppenings_controller_1 = require("../controllers/job-oppening-controllers/fetch-many-job-oppenings.controller");
const get_job_oppening_by_id_controller_1 = require("../controllers/job-oppening-controllers/get-job-oppening-by-id.controller");
const update_job_oppening_controller_1 = require("../controllers/job-oppening-controllers/update-job-oppening.controller");
function makeJobOppeningControllers(repository) {
    const create = new create_job_oppening_controller_1.CreateJobOppeningController(new create_job_oppening_useCase_1.CreateJobOppeningUseCase(repository));
    const update = new update_job_oppening_controller_1.UpdateJobOppeningController(new update_job_oppening_useCase_1.UpdateJobOppeningUseCase(repository));
    const remove = new delete_job_oppening_controller_1.DeleteJobOppeningController(new delete_job_oppening_useCase_1.DeleteJobOppeningUseCase(repository));
    const getById = new get_job_oppening_by_id_controller_1.GetJobOppeningByIdController(new get_job_oppening_by_id_useCase_1.GetJobOppeningByIdUseCase(repository));
    const fetchMany = new fetch_many_job_oppenings_controller_1.FetchManyJobOppeningsController(new fetch_many_job_oppenings_useCase_1.FetchManyJobOppeningsUseCase(repository));
    return {
        create,
        update,
        remove,
        getById,
        fetchMany,
    };
}
//# sourceMappingURL=make-job-oppening-controllers.js.map