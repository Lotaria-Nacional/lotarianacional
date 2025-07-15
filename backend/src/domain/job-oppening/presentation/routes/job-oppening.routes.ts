import { Router } from "express";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { makeJobOppeningControllers } from "../factories/make-job-oppening-controllers";
import { PrismaJobOppeningRepository } from "../../infra/repository/prisma-job-oppening.repository";

const jobOppeningRoutes = Router();
const repository = new PrismaJobOppeningRepository();

const { create, fetchMany, getById, remove, update } = makeJobOppeningControllers(repository);

jobOppeningRoutes.post("/", expressAdapterController(create));
jobOppeningRoutes.put("/:id", expressAdapterController(update));
jobOppeningRoutes.delete("/:id", expressAdapterController(remove));
jobOppeningRoutes.get("/:id", expressAdapterController(getById));
jobOppeningRoutes.get("/", expressAdapterController(fetchMany));

export default jobOppeningRoutes;
