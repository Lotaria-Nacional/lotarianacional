"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPassword = void 0;
class InvalidPassword extends Error {
    name = "InvalidPasswordError";
    constructor(message = "Palavra-passe incorreta.") {
        super(message);
        Object.setPrototypeOf(this, InvalidPassword.prototype);
    }
}
exports.InvalidPassword = InvalidPassword;
//# sourceMappingURL=invalid-password.error.js.map