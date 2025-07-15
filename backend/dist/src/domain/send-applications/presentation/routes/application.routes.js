"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_middleware_1 = require("../../../../core/middlewares/multer.middleware");
const send_grid_service_1 = require("../../../../core/services/emails/send-grid-service");
const send_job_application_reseller_use_case_1 = require("../../use-cases/send-job-application-reseller.use-case");
const send_job_application_reseller_controller_1 = require("../controlles/send-job-application-reseller.controller");
const send_job_application_skilled_staff_use_case_1 = require("../../use-cases/send-job-application-skilled-staff.use-case");
const send_job_application_skilled_staff_controller_1 = require("../controlles/send-job-application-skilled-staff.controller");
const applicationRoutes = (0, express_1.Router)();
const sendGridService = new send_grid_service_1.SendGridEmailSender();
const sendApplicationUseCase = new send_job_application_skilled_staff_use_case_1.SendJobApplicationSkilledStaffUseCase(sendGridService);
const sendJobApplicationResellerUseCase = new send_job_application_reseller_use_case_1.SendJobApplicationResellerUseCase(sendGridService);
const sendJobApplicationSkilledStaffController = new send_job_application_skilled_staff_controller_1.SendJobApplicationSkilledStaffController(sendApplicationUseCase);
const sendJobApplicationResellerController = new send_job_application_reseller_controller_1.SendJobApplicationResellerController(sendJobApplicationResellerUseCase);
const uploadFile = multer_middleware_1.upload.single("cv");
const uploadFiles = multer_middleware_1.upload.fields([
    { name: "bi", maxCount: 1 },
    { name: "proofOfAddress", maxCount: 1 },
]);
applicationRoutes.post("/skilled-staff", uploadFile, (req, res) => {
    sendJobApplicationSkilledStaffController.handle(req, res);
});
applicationRoutes.post("/reseller", uploadFiles, (req, res) => {
    sendJobApplicationResellerController.handle(req, res);
});
exports.default = applicationRoutes;
//# sourceMappingURL=application.routes.js.map