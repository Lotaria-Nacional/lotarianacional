import { Router } from "express"
import { SendApplicationController } from "../controlles/send-application.controller"
import { SendApplicationUseCase } from "../../use-cases/send-application.useCase"
import { upload } from "../../../../core/middlewares/multer.middleware"
import { SendGridEmailSender } from "../../../../core/services/emails/send-grid-service"

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
