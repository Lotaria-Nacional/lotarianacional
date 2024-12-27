export type Attachment = {
  filename: string
  content: Buffer
  contentType: string
}

export type BodyProps = {
  firstName: string
  lastName: string
  gender: string
  phone: string
  IBAN: string
}

export type EmailProps = {
  to: string
  from: string
  body: BodyProps
  subject: string
  attachments: Attachment[]
}

export interface IEmailService {
  sendMail(props: EmailProps): Promise<void>
}
