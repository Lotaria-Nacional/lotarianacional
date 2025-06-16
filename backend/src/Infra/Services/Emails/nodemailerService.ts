import nodemailer from 'nodemailer';
import { EmailSender } from '../../../Domain/services/email.service.interface';

export class NodemailerEmailSender implements EmailSender {
  private transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
    auth: {
      user: "dev@lotarianacional.co.ao",
      pass: "devmchzxklzjlyoi",
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
        from: "Lotaria Nacional <dev@lotarianacional.co.ao>",
        to,
        subject,
        html,
        attachments,
      });
  
      console.log("Email enviado com sucesso:", info.response);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      throw error; // Opcional: relança o erro para ser tratado mais acima, se necessário
    }

  }
}
