import {
  EmailProps,
  IEmailService,
} from "../../../domain/services/email.service.interface"

type SendEmailInputDTO = {
  firstName: string
  lastName: string
  phone: number
  gender: string
  iban: number
  attachments: {
    BI_document: string | Buffer
    image: string | Buffer
    proofOfResidence: string | Buffer
  }
}

export class SendEmailUseCase {
  constructor(private emailService: IEmailService) {}

  async execute(data: SendEmailInputDTO): Promise<void> {
    const { attachments, firstName, gender, iban, lastName, phone } = data
  }
}
