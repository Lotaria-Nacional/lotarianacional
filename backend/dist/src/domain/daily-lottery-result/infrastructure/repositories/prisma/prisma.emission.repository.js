"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaEmissionRepository = void 0;
const emission_entity_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/emission.entity");
class PrismaEmissionRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        const emissions = await this.prisma.emission.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return emissions.map((emission) => emission_entity_1.Emission.create({
            url: emission.url ?? null,
            description: emission.description ?? "",
            formatedData: emission.formatedData ?? "",
            createdAt: emission.createdAt ?? new Date(),
        }));
    }
    async save(emission) {
        const { url, description, formatedData, createdAt } = emission.toJSON();
        try {
            await this.prisma.emission.create({
                data: {
                    url,
                    description,
                    formatedData,
                    createdAt,
                },
            });
            console.log("Salvo");
        }
        catch (error) {
            throw new Error("Infra ~ Erro ao criar a emissão.");
        }
    }
}
exports.PrismaEmissionRepository = PrismaEmissionRepository;
//# sourceMappingURL=prisma.emission.repository.js.map