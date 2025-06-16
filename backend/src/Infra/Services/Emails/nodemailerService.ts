import nodemailer from 'nodemailer';
import { EmailSender } from '../../../Domain/services/email.service.interface';

export class NodemailerEmailSender implements EmailSender {
  private transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
    auth: {
      // user: "dev@lotarianacional.co.ao",
      // pass: "devmchzxklzjlyoi",
      user: "pauloluguenda0@gmail.com",
      pass: "ixhxchukutwjikqt",
    },
    tls: {
      rejectUnauthorized:false
  },
    logger: true,
    debug: true,
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

    try {
      const info = await this.transporter.sendMail({
        from: "Lotaria Nacional <pauloluguenda0@gmail.com>",
        to:"pauloluguenda0@gmail.com",
        subject,
        html,
        attachments,
      });
  
      console.log("Email enviado com sucesso:", info.response);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      throw error;
    }

  }
}
