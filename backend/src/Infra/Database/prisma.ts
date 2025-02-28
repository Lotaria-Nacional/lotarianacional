import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["error","warn"]
});

async function testConnection() {
  try {
    console.log("Tentando conectar ao MongoDB com Prisma...");

    await prisma.$connect();

    console.log("✅ Conexão bem-sucedida com o MongoDB!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB com Prisma:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
