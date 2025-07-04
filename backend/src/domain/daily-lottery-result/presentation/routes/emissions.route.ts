import { Router } from "express";
import { emissionRepo } from "../../../../main/container/repositories";
import { makeEmissionController } from "../factories/make-emission.controller";
import { expressAdapterController } from "../../../../core/adapters/express-adapter-controller";

const emissionRouter = Router();

const { fetchEmissions } = makeEmissionController(emissionRepo);

emissionRouter.get("/", expressAdapterController(fetchEmissions));

export default emissionRouter;
