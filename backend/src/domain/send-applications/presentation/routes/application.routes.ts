import { Router } from "express";
import { upload } from "../../../../core/middlewares/multer.middleware";
import { SendGridEmailSender } from "../../../../core/services/emails/send-grid-service";
import { SendJobApplicationResellerUseCase } from "../../use-cases/send-job-application-reseller.use-case";
import { SendJobApplicationResellerController } from "../controlles/send-job-application-reseller.controller";
import { SendJobApplicationSkilledStaffUseCase } from "../../use-cases/send-job-application-skilled-staff.use-case";
import { SendJobApplicationSkilledStaffController } from "../controlles/send-job-application-skilled-staff.controller";

const applicationRoutes = Router();

const sendGridService = new SendGridEmailSender();

const sendApplicationUseCase = new SendJobApplicationSkilledStaffUseCase(sendGridService);
const sendJobApplicationResellerUseCase = new SendJobApplicationResellerUseCase(sendGridService);

const sendJobApplicationSkilledStaffController = new SendJobApplicationSkilledStaffController(sendApplicationUseCase);
const sendJobApplicationResellerController = new SendJobApplicationResellerController(sendJobApplicationResellerUseCase);

const uploadFile = upload.single("cv");

const uploadFiles = upload.fields([
  { name:"bi", maxCount:1 },
  { name:"proofOfAddress", maxCount:1 },
]);

applicationRoutes.post("/skilled-staff", uploadFile, (req, res) => {
  sendJobApplicationSkilledStaffController.handle(req, res);
});

applicationRoutes.post("/reseller", uploadFiles, (req, res) => {
  sendJobApplicationResellerController.handle(req, res);
});

export default applicationRoutes;
