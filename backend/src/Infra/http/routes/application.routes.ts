import { Router } from "express"
import { upload } from "../middlewares/multer.middleware"
import { NodemailerEmailSender } from "../../Services/Emails/nodemailerService"
import { SendApplicationUseCase } from "../../../application/useCases/candidate/sendApplication.useCase"
import { SendApplicationController } from "../controllers/recruitmentControllers/recruitCandidate.controller"

const router = Router()

const nodemailerMailService = new NodemailerEmailSender()

const sendApplicationUseCase = new SendApplicationUseCase(nodemailerMailService)
const recruitCandidateController = new SendApplicationController(sendApplicationUseCase)

const uploadFiles = upload.fields([
  { name: "BI", maxCount: 1 },
  { name: "residenceProof", maxCount: 1 },
])

router.post("/candidatura",uploadFiles, (req, res) => {
  recruitCandidateController.handle(req, res)
})

export default router
