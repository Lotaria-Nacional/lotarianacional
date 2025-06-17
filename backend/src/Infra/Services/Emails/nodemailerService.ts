// import nodemailer from 'nodemailer';
// import { EmailSender } from '../../../Domain/services/email.service.interface';

// export class NodemailerEmailSender implements EmailSender {
//   private transporter = nodemailer.createTransport({
//   host: 'smtp.mailersend.net',
//   port: 587,
//   secure: true,
//     auth: {
//       user: "MS_5rm7q7@test-zkq340epd3kgd796.mlsender.net",
//       pass: "mssp.lOpwFa0.k68zxl26525gj905.hBcEBDK",
//     },
//   });

//   async sendMail(
//     to: string | string[],
//     subject: string,
//     html: string,
//     attachments?: {
//       filename: string;
//       content: Buffer;
//       contentType: string;
//     }[]
//   ): Promise<void> {

//     try {
//       const info = await this.transporter.sendMail({
//         from: "Lotaria Nacional <p.luguenda@lotarianacional.co.ao>",
//         to:"pauloluguenda0@gmail.com",
//         subject,
//         html,
//         attachments,
//       });
  
//       console.log("Email enviado com sucesso:", info.response);
//     } catch (error) {
//       console.error("Erro ao enviar email:", error);
//       throw error;
//     }

//   }
// }
