import { Router } from "express"
import { upload } from "../middlewares/multer.middleware"
import { NodeMailerEmailService } from "../../Services/Emails/nodemailerService"
import { RecruitCandidateUseCase } from "../../../application/useCases/candidate/recruitCandidate.useCase"
import { RecruitCandidateController } from "../controllers/recruitmentControllers/recruitCandidate.controller"

const router = Router()

const nodemailerMailService = new NodeMailerEmailService()
const recruitCandidateUseCase = new RecruitCandidateUseCase(nodemailerMailService)
const recruitCandidateController = new RecruitCandidateController(recruitCandidateUseCase)

const uploadFiles = upload.fields([
  { name: "BI", maxCount: 1 },
  { name: "photo", maxCount: 1 },
  { name: "curriculum", maxCount: 1 },
  { name: "residenceProof", maxCount: 1 },
])

router.post("/recruitment", uploadFiles, (req, res) => {
  recruitCandidateController.handle(req, res)
})

export default router
