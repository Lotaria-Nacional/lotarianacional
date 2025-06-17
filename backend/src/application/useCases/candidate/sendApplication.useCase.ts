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

    const templatePath = path.resolve(__dirname, "..", "..", "..", "Infra", "http", "views", "candidatura-template.ejs");
    const html = await ejs.renderFile(templatePath, {
      email, firstName, gender, lastName, phone, biSrc
    });

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
      "d.romao@lotarianacional.co.ao",
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
