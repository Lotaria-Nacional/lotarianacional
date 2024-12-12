"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidLatitudeException = void 0;
const domain_error_1 = require("../../../../shared/errors/domain.error");
class InvalidLatitudeException extends domain_error_1.DomainError {
    constructor() {
        super("A latitude deve estar entre 90 e 180.");
    }
}
exports.InvalidLatitudeException = InvalidLatitudeException;
