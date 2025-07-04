import { Router } from "express";
import { upload } from "@/core/middlewares/multer.middleware";
import { SendGridEmailSender } from "@/core/services/emails/send-grid-service";
import { SendJobApplicationSkilledStaffUseCase } from "../../use-cases/send-job-application-skilled-staff.use-case";
import { SendJobApplicationResellerController } from "../controlles/send-job-application-reseller.controller";
import { SendJobApplicationSkilledStaffController } from "../controlles/send-job-application-skilled-staff.controller";
import { SendJobApplicationResellerUseCase } from "../../use-cases/send-job-application-reseller.use-case";

const applicationRoutes = Router();

const sendGridService = new SendGridEmailSender();

const sendApplicationUseCase = new SendJobApplicationSkilledStaffUseCase(sendGridService);
const sendJobApplicationResellerUseCase = new SendJobApplicationResellerUseCase(sendGridService);

const sendJobApplicationSkilledStaffController = new SendJobApplicationSkilledStaffController(sendApplicationUseCase);
const sendJobApplicationResellerController = new SendJobApplicationResellerController(sendJobApplicationResellerUseCase);

const uploadFile = upload.single("cv");

applicationRoutes.post("/skilled-staff", uploadFile, (req, res) => {
  sendJobApplicationSkilledStaffController.handle(req, res);
});

applicationRoutes.post("/reseller", uploadFile, (req, res) => {
  sendJobApplicationResellerController.handle(req, res);
});

export default applicationRoutes;
