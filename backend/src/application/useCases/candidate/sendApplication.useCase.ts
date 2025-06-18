import ejs from 'ejs';
import path from 'path';
import { EmailSender } from '../../../Domain/services/email.service.interface';

type SendApplicationInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  BI: {
    buffer: Buffer;
    originalname: string;
    mimetype: string;
  };
  residenceProof?: {
    buffer: Buffer;
    originalname: string;
    mimetype: string;
  };
};

export class SendApplicationUseCase {
  constructor(private readonly emailSender: EmailSender) {}

  async execute(input: SendApplicationInput): Promise<void> {
    const { BI, email, firstName, gender, lastName, phone } = input;

    const biBase64 = BI.buffer.toString('base64');
    const biSrc = `data:${BI.mimetype};base64,${biBase64}`;

    // const templatePath = path.resolve(__dirname, "..", "..", "..", "Infra", "http", "views", "candidatura-template.ejs");
    // const html = await ejs.renderFile(templatePath, {
    //   email, firstName, gender, lastName, phone, biSrc
    // });

    const html = `
        <div style="width: 100%; background: #f3f3f3; padding: 20px 0;">
            <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; padding: 20px;">
              <h1 style="font-size: 22px; color: #333333; text-align: center;">
                Nova Candidatura Recebida
              </h1>

              <div style="padding: 10px 0;">
                <p style="margin: 5px 0; color: #000;">Nome: ${firstName} </p>
                <p style="margin: 5px 0; color: #000;">Sobrenome: ${lastName}</p>
                <p style="margin: 5px 0; color: #000;">Email: ${email}</p>
                <p style="margin: 5px 0; color: #000;">Nº Telefone: ${phone}</p>
                <p style="margin: 5px 0; color: #000;">Gênero: ${gender}</p>
              </div>

              <hr style="border: none; height: 1px; background-color: #ff5555; margin: 20px 0;" /> 

              <p style="text-align: center; color: #777; font-size: 12px;">&copy; 2025 Lotaria Nacional de Angola</p> 
            </div> 
          </div> 
        `

    const attachments = [
      {
        filename: BI.originalname,
        content: BI.buffer,
        contentType: BI.mimetype,
      },
    ];

    if (input.residenceProof) {
      attachments.push({
        filename: input.residenceProof.originalname,
        content: input.residenceProof.buffer,
        contentType: input.residenceProof.mimetype,
      });
    }

    const recipients = [
      "recrutamentorevendedores@lotarianacional.co.ao"
    ];
    
    await this.emailSender.sendMail(
      recipients,
      'Nova Candidatura',
      html,
      attachments,
    );
  }
}
