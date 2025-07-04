import { Request, Response } from "express";
import { SendJobApplicationResellerUseCase } from "../../use-cases/send-job-application-reseller.use-case";

export class SendJobApplicationResellerController {
  constructor(private readonly useCase: SendJobApplicationResellerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const file = req.file as Express.Multer.File;

      await this.useCase.execute({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        location: req.body.location,
        phone: req.body.phone,
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
