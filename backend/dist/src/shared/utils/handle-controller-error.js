"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleControllerError = handleControllerError;
const zod_1 = require("zod");
const logger_1 = require("../../main/config/logger");
function handleControllerError(error) {
    if (error instanceof zod_1.ZodError) {
        return {
            statusCode: 400,
            body: {
                message: error.errors[0].message,
            },
        };
    }
    if (error instanceof Error) {
        return {
            statusCode: 500,
            body: { message: error.message },
        };
    }
    logger_1.logger.error("Unhandled Error: " + JSON.stringify(error));
    return {
        statusCode: 500,
        body: { message: "Erro interno no servidor" },
    };
}
//# sourceMappingURL=handle-controller-error.js.map