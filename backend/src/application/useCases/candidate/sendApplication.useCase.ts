// import ejs from 'ejs';
// import path from 'path';
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

    // const templatePath = path.resolve(__dirname, "..", "..","..","Infra", "http", "views", "candidatura-template.ejs");
    // const html = await ejs.renderFile(templatePath, { BI, email, firstName, gender, lastName, phone });

    const html = `
    <div>
      <h1> Olá, ${firstName} </h1>
      <p>Nome: ${firstName}</p>
      <p>Sobrenome: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Nº Telefone: ${phone}</p>
      <p>Sexo: ${gender}</p>
    </div>
    `
    
    const attachments = [
      {
        filename: input.BI.originalname,
        content: input.BI.buffer,
        contentType: input.BI.mimetype,
      },
    ];

    if (input.residenceProof) {
      attachments.push({
        filename: input.residenceProof.originalname,
        content: input.residenceProof.buffer,
        contentType: input.residenceProof.mimetype,
      });
    }

    const recipients = ["p.luguenda@lotarianacional.co.ao"]
    
    await this.emailSender.sendMail(
      recipients,
      'Nova Candidatura',
      html,
      attachments,
    );
  }
}