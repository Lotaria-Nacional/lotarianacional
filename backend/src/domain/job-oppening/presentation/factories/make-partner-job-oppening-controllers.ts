import { IPartnerJobOppeningRepository } from "../../application/interfaces/partner-job-oppening.repository";
import { CreatePartnerJobOppeningUseCase } from "../../application/use-cases/partner-job-oppening/create-partner-job-oppening.useCase";
import { DeletePartnerJobOppeningUseCase } from "../../application/use-cases/partner-job-oppening/delete-partner-job-oppening.useCase";
import { FetchManyPartnerJobOppeningsUseCase } from "../../application/use-cases/partner-job-oppening/fetch-many-partner-job-oppenings.useCase";
import { GetPartnerJobOppeningByIdUseCase } from "../../application/use-cases/partner-job-oppening/get-partner-job-oppening-by-id.useCase";
import { UpdatePartnerJobOppeningUseCase } from "../../application/use-cases/partner-job-oppening/update-partner-job-oppening.useCase";
import { CreatePartnerJobOppeningController } from "../controllers/partner-controllers/create-partner-job-oppening.controller";
import { DeletePartnerJobOppeningController } from "../controllers/partner-controllers/delete-partner-job-oppening.controller";
import { FetchManyPartnerJobOppeningsController } from "../controllers/partner-controllers/fetch-many-partner-job-oppenings.controller";
import { GetPartnerJobOppeningByIdController } from "../controllers/partner-controllers/get-partner-job-oppening-by-id.controller";
import { UpdatePartnerJobOppeningController } from "../controllers/partner-controllers/update-partner-job-oppening.controller";

export function makePartnerJobOppeningControllers(repository: IPartnerJobOppeningRepository) {
  const create = new CreatePartnerJobOppeningController(new CreatePartnerJobOppeningUseCase(repository));
  const update = new UpdatePartnerJobOppeningController(new UpdatePartnerJobOppeningUseCase(repository));
  const remove = new DeletePartnerJobOppeningController(new DeletePartnerJobOppeningUseCase(repository));
  const getById = new GetPartnerJobOppeningByIdController(new GetPartnerJobOppeningByIdUseCase(repository));
  const fetchMany = new FetchManyPartnerJobOppeningsController(new FetchManyPartnerJobOppeningsUseCase(repository));

  return {
    create,
    update,
    remove,
    getById,
    fetchMany,
  };
}
