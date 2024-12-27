import {
  recruitmentSchema,
  RecruitmentSchemaType,
} from "../../schemas/recruitment.schema"
import { z } from "zod"
import { Request, Response } from "express"
import { RecruitCandidateUseCase } from "../../../../application/useCases/candidate/recruitCandidate.useCase"

type ExpressFileType = { [fieldname: string]: Express.Multer.File[] }

export class RecruitCandidateController {
  constructor(private recruitCandidateUseCase: RecruitCandidateUseCase) {}

  async handle(req: Request, res: Response) {
    const candidateData = recruitmentSchema.parse(req.body)
    const files = req.files as ExpressFileType

    try {
      const missingFields = this.validateFiles(files)

      if (missingFields.length > 0) {
        const message = `Os seguintes campos são obrigatórios: ${missingFields.join(
          ", "
        )}`
        return res.status(400).json(message)
      }

      const candidate = this.createCandidate(candidateData, files)

      await this.recruitCandidateUseCase.execute(candidate)
      return res
        .status(200)
        .json({ message: "A sua candidatura foi enviada com sucesso!" })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      return res
        .status(500)
        .json({ message: "Erro interno no servidor", err: error })
    }
  }

  private validateFiles(files: ExpressFileType) {
    const requiredFields = ["photo", "BI", "residenceProof", "curriculum"]
    const missingFields = requiredFields.filter((field) => !files[field])
    return missingFields
  }
  private createCandidate(data: RecruitmentSchemaType, files: ExpressFileType) {
    const candidate = {
      ...data,
      BI: {
        filename: "Bilhete de Identidade",
        content: files["BI"][0]!.buffer,
        contentType: files["BI"][0]!.mimetype,
      },
      photo: {
        filename: "Fotografia Tipo Passe",
        content: files["photo"][0]!.buffer,
        contentType: files["photo"][0]!.mimetype,
      },
      curriculum: {
        filename: "Currículum Vitae",
        content: files["curriculum"][0]!.buffer,
        contentType: files["curriculum"][0]!.mimetype,
      },
      residenceProof: {
        filename: "Comprovativo de Residência",
        content: files["residenceProof"][0]!.buffer,
        contentType: files["residenceProof"][0]!.mimetype,
      },
    }
    return candidate
  }
}
