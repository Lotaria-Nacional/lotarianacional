"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const logger_1 = require("./logger");
exports.prisma = new client_1.PrismaClient();
async function testConnection() {
    try {
        logger_1.logger.info("Tentando conectar ao MongoDB com Prisma...");
        await exports.prisma.$connect();
        logger_1.logger.info("✅ Conexão bem-sucedida com o MongoDB!");
    }
    catch (error) {
        logger_1.logger.error({ error }, "❌ Erro ao conectar ao MongoDB com Prisma:", error);
    }
    finally {
        await exports.prisma.$disconnect();
    }
}
testConnection();
//# sourceMappingURL=prisma.js.map