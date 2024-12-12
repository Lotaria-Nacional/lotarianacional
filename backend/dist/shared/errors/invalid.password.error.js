"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPassword = void 0;
class InvalidPassword extends Error {
    constructor(message = "Palavra-passe incorreta.") {
        super(message);
        this.name = "InvalidPasswordError";
        Object.setPrototypeOf(this, InvalidPassword.prototype);
    }
}
exports.InvalidPassword = InvalidPassword;
