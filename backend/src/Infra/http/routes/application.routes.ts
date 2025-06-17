import { Router } from "express"
import { upload } from "../middlewares/multer.middleware"
import { SendGridEmailSender } from "../../Services/Emails/sendGridService"
import { SendApplicationUseCase } from "../../../application/useCases/candidate/sendApplication.useCase"
import { SendApplicationController } from "../controllers/recruitmentControllers/recruitCandidate.controller"

const applicationRoutes = Router()

const sendGridService = new SendGridEmailSender()

const sendApplicationUseCase = new SendApplicationUseCase(sendGridService)
const recruitCandidateController = new SendApplicationController(sendApplicationUseCase)

const uploadFiles = upload.fields([
  { name: "BI", maxCount: 1 },
  { name: "residenceProof", maxCount: 1 },
])

applicationRoutes.post("/candidatura",uploadFiles, (req, res) => {
  recruitCandidateController.handle(req, res)
})

export default applicationRoutes
