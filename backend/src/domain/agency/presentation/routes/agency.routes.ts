import { Router } from "express";
import { agencyRepository } from "../../../../main/container/repositories";
import { agencyControllerFactory } from "../factories/make-agency-controllers";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";

const agencyRouter = Router();

const { createAgency, deleteAgency, fetchManyAgencies, getAgencyById, updateAgency } = agencyControllerFactory(agencyRepository);

agencyRouter.post("/agency", expressAdapterController(createAgency));

agencyRouter.get("/", expressAdapterController(fetchManyAgencies));
agencyRouter.get("/:id", expressAdapterController(getAgencyById));
agencyRouter.put("/:id", expressAdapterController(updateAgency));
agencyRouter.delete("/:id", expressAdapterController(deleteAgency));

export default agencyRouter;
