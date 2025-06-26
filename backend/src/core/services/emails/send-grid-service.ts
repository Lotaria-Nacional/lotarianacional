import sgMail from '@sendgrid/mail';
import { EmailSender } from '../../interfaces/email.interface';

export class SendGridEmailSender implements EmailSender {
  private readonly API_KEY = process.env.SENDGRID_API_KEY
  constructor() {
    sgMail.setApiKey(this.API_KEY!);
  }

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
      const msg: sgMail.MailDataRequired = {
        from: "recrutamentorevendedores@lotarianacional.co.ao",
        to,
        subject,
        html,
        attachments: attachments?.map(att => ({
          filename: att.filename,
          content: att.content.toString('base64'),
          type: att.contentType,
          disposition: 'attachment',
        })),
      };

      await sgMail.send(msg);

      console.log("Email enviado com sucesso via SendGrid");
    } catch (err: any) {
      console.error("Erro ao enviar email com SendGrid:", err?.response?.body || err.message);
      throw err;
    }
  }
}
