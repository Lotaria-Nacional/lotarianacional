"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidException = void 0;
class InvalidException extends Error {
    constructor() {
        super("Os resultados devem ser adicionados no mesmo dia.");
        this.name = this.constructor.name;
    }
}
exports.InvalidException = InvalidException;
