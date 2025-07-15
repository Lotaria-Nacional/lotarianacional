import { IJobOppeningRepository } from "../../application/interfaces/job-oppening.repository";
import { CreateJobOppeningUseCase } from "../../application/use-cases/create-job-oppening.useCase";
import { DeleteJobOppeningUseCase } from "../../application/use-cases/delete-job-oppening.useCase";
import { FetchManyJobOppeningsUseCase } from "../../application/use-cases/fetch-many-job-oppenings.useCase";
import { GetJobOppeningByIdUseCase } from "../../application/use-cases/get-job-oppening-by-id.useCase";
import { UpdateJobOppeningUseCase } from "../../application/use-cases/update-job-oppening.useCase";
import { CreateJobOppeningController } from "../controllers/create-job-oppening.controller";
import { DeleteJobOppeningController } from "../controllers/delete-job-oppening.controller";
import { FetchManyJobOppeningsController } from "../controllers/fetch-many-job-oppenings.controller";
import { GetJobOppeningByIdController } from "../controllers/get-job-oppening-by-id.controller";
import { UpdateJobOppeningController } from "../controllers/update-job-oppening.controller";

export function makeJobOppeningControllers(repository: IJobOppeningRepository) {
  const create = new CreateJobOppeningController(new CreateJobOppeningUseCase(repository));
  const update = new UpdateJobOppeningController(new UpdateJobOppeningUseCase(repository));
  const remove = new DeleteJobOppeningController(new DeleteJobOppeningUseCase(repository));
  const getById = new GetJobOppeningByIdController(new GetJobOppeningByIdUseCase(repository));
  const fetchMany = new FetchManyJobOppeningsController(new FetchManyJobOppeningsUseCase(repository));

  return {
    create,
    update,
    remove,
    getById,
    fetchMany,
  };
}
