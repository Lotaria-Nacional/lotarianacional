import nodemailer from 'nodemailer';
import { EmailSender } from '../../../Domain/services/email.service.interface';

export class NodemailerEmailSender implements EmailSender {
  private transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

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
      from: `"Lotaria Nacional" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      attachments,
    });
  }
}
