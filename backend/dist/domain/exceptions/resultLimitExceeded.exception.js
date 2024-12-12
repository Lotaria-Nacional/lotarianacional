"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultLimitException = void 0;
class ResultLimitException extends Error {
    constructor() {
        super("Apenas 4 resultados são permitidos por dia.");
        this.name = this.constructor.name;
    }
}
exports.ResultLimitException = ResultLimitException;
