export type EmailProps = {
  from: string
  to: string
  subject: string
  body: string
  attachments: string
}

export interface IEmailService {
  sendMail(props: EmailProps): Promise<void>
}