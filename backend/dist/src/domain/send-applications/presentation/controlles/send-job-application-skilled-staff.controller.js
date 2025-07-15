"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendJobApplicationSkilledStaffController = void 0;
class SendJobApplicationSkilledStaffController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req, res) {
        try {
            const file = req.file;
            await this.useCase.execute({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                department: req.body.department,
                title: req.body.title,
                cv: {
                    buffer: file.buffer,
                    originalname: file.originalname,
                    mimetype: file.mimetype,
                },
            });
            return res.status(200).json({ message: "Candidatura enviada com sucesso!" });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao enviar candidatura", errr: error });
        }
    }
}
exports.SendJobApplicationSkilledStaffController = SendJobApplicationSkilledStaffController;
//# sourceMappingURL=send-job-application-skilled-staff.controller.js.map