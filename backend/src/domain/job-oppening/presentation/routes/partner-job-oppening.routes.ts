import { Router } from "express";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { PrismaPartnerJobOppeningRepository } from "../../infra/repository/prisma-partner-job-oppening.repository";
import { makePartnerJobOppeningControllers } from "../factories/make-partner-job-oppening-controllers";

const partnerJobOppeningRoutes = Router();
const repository = new PrismaPartnerJobOppeningRepository();

const { create, fetchMany, getById, remove, update } = makePartnerJobOppeningControllers(repository);

partnerJobOppeningRoutes.post("/", expressAdapterController(create));
partnerJobOppeningRoutes.put("/:id", expressAdapterController(update));
partnerJobOppeningRoutes.delete("/:id", expressAdapterController(remove));
partnerJobOppeningRoutes.get("/:id", expressAdapterController(getById));
partnerJobOppeningRoutes.get("/", expressAdapterController(fetchMany));

export default partnerJobOppeningRoutes;
