import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["error", "query", "warn", "info"],
});

async function testConnection() {
  try {
    console.log("Tentando conectar ao MongoDB com Prisma...");

    // Tenta buscar qualquer coisa no banco para validar a conexão
    await prisma.$connect();

    console.log("✅ Conexão bem-sucedida com o MongoDB!");

    const collections = await prisma.$runCommandRaw({
      listCollections: 1,
    });
    console.log("📂 Coleções no banco:", collections);
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB com Prisma:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
