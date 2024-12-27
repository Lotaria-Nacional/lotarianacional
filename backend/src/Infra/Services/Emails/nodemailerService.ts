import {
  EmailProps,
  IEmailService,
} from "../../../Domain/services/email.service.interface"
import ejs from "ejs"
import nodemailer from "nodemailer"
import { resolveTemplatePath } from "../../../utils/email"

export class NodeMailerEmailService implements IEmailService {
  private transporter
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "geral.lotarianacional@gmail.com",
        pass: "hdvbnkskfcyrtvgo",
      },
    })
  }
  async sendMail(props: EmailProps): Promise<void> {
    try {
      const html = await ejs.renderFile(resolveTemplatePath("email.ejs"), {
        firstName: props.body.firstName,
        lastName: props.body.lastName,
        gender: props.body.gender,
        phone: props.body.phone,
        IBAN: props.body.IBAN,
      })
      await this.transporter.sendMail({
        to: props.to,
        from: props.from,
        subject: props.subject,
        html,
        attachments: props.attachments,
      })
    } catch (error) {
      throw error
    }
  }
}
