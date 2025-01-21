import { Request, Response, Router } from "express";

import { PrismaEmissionRepository } from "../../repositories/prisma/prisma.emission.repository";
import { GetEmissionsController } from "../controllers/emissionControllers/get.emissions.controller";
import { GetEmissionUseCase } from "../../../application/useCases/emission/get.emissionUseCase";

const router = Router();
const prismaEmissionRepository = new PrismaEmissionRepository();
const getEmissionUseCase = new GetEmissionUseCase(prismaEmissionRepository);

const getEmissionsController = new GetEmissionsController(getEmissionUseCase);

router.get("/emissions", (req: Request, res: Response) => {
  getEmissionsController.handle(req, res);
});

export default router;
