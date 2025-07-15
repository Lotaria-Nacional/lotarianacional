"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendJobApplicationResellerController = void 0;
class SendJobApplicationResellerController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req, res) {
        try {
            const files = req.files;
            const biFile = files["bi"]?.[0];
            const proofOfAddressFile = files["proofOfAddress"]?.[0];
            console.log({ biFile, proofOfAddressFile });
            if (!biFile) {
                return res.status(400).json({ message: "bi error" });
            }
            await this.useCase.execute({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                location: req.body.location,
                phone: req.body.phone,
                bi: {
                    buffer: biFile.buffer,
                    originalname: biFile.originalname,
                    mimetype: biFile.mimetype,
                },
                proofOfAddress: proofOfAddressFile ? {
                    buffer: proofOfAddressFile.buffer,
                    originalname: proofOfAddressFile.originalname,
                    mimetype: proofOfAddressFile.mimetype,
                } : undefined
            });
            return res.status(200).json({ message: "Candidatura enviada com sucesso!" });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao enviar candidatura", errr: error });
        }
    }
}
exports.SendJobApplicationResellerController = SendJobApplicationResellerController;
//# sourceMappingURL=send-job-application-reseller.controller.js.map