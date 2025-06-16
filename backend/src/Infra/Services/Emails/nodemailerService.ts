import nodemailer from 'nodemailer';
import { EmailSender } from '../../../Domain/services/email.service.interface';

export class NodemailerEmailSender implements EmailSender {
  private transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "dev@lotarianacional.co.ao",
      pass: "devmchzxklzjlyoi",
    },
  });

// EMAIL_USER=dev@lotarianacional.co.ao
// EMAIL_PASS=devmchzxklzjlyoi

  async sendMail(
    to: string | string[],
    subject: string,
    html: string,
    attachments?: {
      filename: string;
      content: Buffer;
      contentType: string;
    }[]
  ): Promise<void> {
    await this.transporter.sendMail({
      from: "Lotaria Nacional <dev@lotarianacional.co.ao>",
      to,
      subject,
      html,
      attachments,
    });
  }
}
