import fs from 'fs';
import { Request, Response } from 'express';
import { SendApplicationUseCase } from '../../../../application/useCases/candidate/sendApplication.useCase';

export class SendApplicationController {
  constructor(private readonly sendApplicationUseCase: SendApplicationUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const files = req.files as {
        BI?: Express.Multer.File[];
        residenceProof?: Express.Multer.File[];
      };

      const fileBI = files.BI?.[0];
      
      if (!fileBI) {
        return res.status(400).json({ message: "O Bilhete de identidade é obrigatório" });
      }
      
      await this.sendApplicationUseCase.execute({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        BI: {
          buffer: fileBI.buffer,
          originalname: fileBI.originalname,
          mimetype: fileBI.mimetype,
        },
        residenceProof: files.residenceProof?.[0]
          ? {
              buffer: files.residenceProof[0].buffer,
              originalname: files.residenceProof[0].originalname,
              mimetype: files.residenceProof[0].mimetype,
            }
          : undefined,
      });

      return res.status(200).json({ message: 'Candidatura enviada com sucesso!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao enviar candidatura' });
    }
  }
}
