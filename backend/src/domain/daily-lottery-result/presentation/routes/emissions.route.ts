import { Router } from "express";
import { makeEmissionController } from "../factories/make-emission.controller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";
import { PrismaEmissionRepository } from "../../infrastructure/repositories/prisma/prisma.emission.repository";

const emissionRouter = Router();

const emissionRepository = new PrismaEmissionRepository();
const { fetchEmissions } = makeEmissionController(emissionRepository)

emissionRouter.get("/emissions", expressAdapterController(fetchEmissions));

export default emissionRouter;