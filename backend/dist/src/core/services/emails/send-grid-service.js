"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendGridEmailSender = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
const env_1 = require("../../../main/config/env");
class SendGridEmailSender {
    API_KEY = env_1.env.SENDGRID_API_KEY;
    constructor() {
        mail_1.default.setApiKey(this.API_KEY);
    }
    async sendMail(to, subject, html, attachments) {
        try {
            const msg = {
                from: "recrutamentorevendedores@lotarianacional.co.ao",
                to,
                subject,
                html,
                attachments: attachments?.map((att) => ({
                    filename: att.filename,
                    content: att.content.toString("base64"),
                    type: att.contentType,
                    disposition: "attachment",
                })),
            };
            await mail_1.default.send(msg);
            console.log("Email enviado com sucesso via SendGrid");
        }
        catch (err) {
            console.error("Erro ao enviar email com SendGrid:", err?.response?.body || err.message);
            throw err;
        }
    }
}
exports.SendGridEmailSender = SendGridEmailSender;
//# sourceMappingURL=send-grid-service.js.map