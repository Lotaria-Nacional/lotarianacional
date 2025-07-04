import { EmailSender } from "@/core/contracts/email.interface";

type SendApplicationInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  cv: {
    buffer: Buffer;
    originalname: string;
    mimetype: string;
  };
};

export class SendJobApplicationResellerUseCase {
  constructor(private readonly emailSender: EmailSender) {}

  async execute(input: SendApplicationInput): Promise<void> {
    const { cv, email, firstName, lastName, phone, location } = input;

    const biBase64 = cv.buffer.toString("base64");
    const biSrc = `data:${cv.mimetype};base64,${biBase64}`;

    const html = `
        <div style="width: 100%; background: #f3f3f3; padding: 20px 0;">
            
            <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; padding: 20px;">
              <h1 style="font-size: 22px; color: #333333; text-align: center;">
                Candidatura Recebida para Revendedor
              </h1>

              <div style="padding: 10px 0;">
                <p style="margin: 5px 0; color: #000;">Nome: ${firstName} </p>
                <p style="margin: 5px 0; color: #000;">Sobrenome: ${lastName}</p>
                <p style="margin: 5px 0; color: #000;">Email: ${email}</p>
                <p style="margin: 5px 0; color: #000;">Nº Telefone: ${phone}</p>
                <p style="margin: 5px 0; color: #000;">Localização: ${location}</p>
              </div>

              <hr style="border: none; height: 1px; background-color: #ff5555; margin: 20px 0;" /> 

              <p style="text-align: center; color: #777; font-size: 12px;">&copy; 2025 Lotaria Nacional de Angola</p> 
            </div> 
          </div> 
        `;

    const attachments = [
      {
        filename: cv.originalname,
        content: cv.buffer,
        contentType: cv.mimetype,
      },
    ];

    if (input.cv) {
      attachments.push({
        filename: input.cv.originalname,
        content: input.cv.buffer,
        contentType: input.cv.mimetype,
      });
    }

    const recipients = [
      "revendedores@lotarianacional.co.ao",
      // "p.luguenda@lotarianacional.co.ao",
    ];

    await this.emailSender.sendMail(recipients, "Nova Candidatura", html, attachments);
  }
}
