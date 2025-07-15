"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendJobApplicationResellerUseCase = void 0;
class SendJobApplicationResellerUseCase {
    emailSender;
    constructor(emailSender) {
        this.emailSender = emailSender;
    }
    async execute(input) {
        const { bi, proofOfAddress, email, firstName, lastName, phone, location } = input;
        const biBase64 = bi.buffer.toString("base64");
        // const biSrc = `data:${bi.mimetype};base64,${biBase64}`;
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
                filename: bi.originalname,
                content: bi.buffer,
                contentType: bi.mimetype,
            },
        ];
        if (proofOfAddress) {
            attachments.push({
                filename: proofOfAddress.originalname,
                content: proofOfAddress.buffer,
                contentType: proofOfAddress.mimetype,
            });
        }
        const recipients = [
            "revendedores@lotarianacional.co.ao",
            // "p.luguenda@lotarianacional.co.ao",
        ];
        await this.emailSender.sendMail(recipients, "Nova Candidatura", html, attachments);
    }
}
exports.SendJobApplicationResellerUseCase = SendJobApplicationResellerUseCase;
//# sourceMappingURL=send-job-application-reseller.use-case.js.map