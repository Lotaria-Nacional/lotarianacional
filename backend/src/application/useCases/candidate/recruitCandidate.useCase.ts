import { RecruitmentInputDTO } from "../../dtos/candidate.dto"
import {
  Attachment,
  BodyProps,
  IEmailService,
} from "../../../Domain/services/email.service.interface"

export class RecruitCandidateUseCase {
  constructor(private emailService: IEmailService) {}

  async execute(data: RecruitmentInputDTO) {
    try {
      const emailBody: BodyProps = {
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        phone: data.phone,
        IBAN: data.IBAN,
      }

      const attachments: Attachment[] = [
        data.BI && data.BI,
        data.photo && data.photo,
        data.curriculum && data.curriculum,
        data.residenceProof && data.residenceProof,
      ].filter(Boolean)

      await this.emailService.sendMail({
        from: "geral.lotarianacional@gmail.com",
        to: "geral.lotarianacional@gmail.com",
        subject: "Recrutamento",
        body: emailBody,
        attachments,
      })
    } catch (error) {
      throw error
    }
  }
}
