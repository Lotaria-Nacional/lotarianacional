"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        this.cause = this.cause;
        this.name = this.constructor.name;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.AppError = AppError;
//# sourceMappingURL=app-error.js.map