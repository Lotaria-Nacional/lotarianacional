import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";
import { JobOppeningMapper } from "../../domain/job-oppening/infra/mappers/job-oppening.mapper";

export const prisma = new PrismaClient();

async function testConnection() {
  try {
    logger.info("Tentando conectar ao MongoDB com Prisma...");
    await prisma.$connect();
    logger.info("✅ Conexão bem-sucedida com o MongoDB!");
  } catch (error) {
    logger.error({ error }, "❌ Erro ao conectar ao MongoDB com Prisma:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
