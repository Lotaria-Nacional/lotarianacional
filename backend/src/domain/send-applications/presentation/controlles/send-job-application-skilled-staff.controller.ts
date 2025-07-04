import { Request, Response } from "express";
import { SendJobApplicationSkilledStaffUseCase } from "../../use-cases/send-job-application-skilled-staff.use-case";

export class SendJobApplicationSkilledStaffController {
  constructor(private readonly useCase: SendJobApplicationSkilledStaffUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const file = req.file as Express.Multer.File;

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
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao enviar candidatura", errr: error });
    }
  }
}
