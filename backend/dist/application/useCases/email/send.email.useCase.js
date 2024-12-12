"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailUseCase = void 0;
class SendEmailUseCase {
    constructor(emailService) {
        this.emailService = emailService;
    }
    async execute(data) {
        const { attachments, firstName, gender, iban, lastName, phone } = data;
    }
}
exports.SendEmailUseCase = SendEmailUseCase;
