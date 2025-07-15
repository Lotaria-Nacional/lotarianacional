"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = void 0;
class DomainError extends Error {
    name;
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, DomainError);
    }
}
exports.DomainError = DomainError;
//# sourceMappingURL=domain.error.js.map