"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAgencyRepository = void 0;
const agency_entity_1 = require("../../../enterprise/entities/agency.entity");
class PrismaAgencyRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(agency) {
        await this.prisma.agencies.create({
            data: {
                type: agency.type,
                name: agency.name,
                location_text: agency.location_text,
                latitude: agency.latitude,
                longitude: agency.longitude,
                phone: agency.phone,
                createdAt: agency.createdAt ?? new Date(),
            },
        });
    }
    async getAll() {
        const agencies = await this.prisma.agencies.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return agencies.map((agency) => agency_entity_1.Agency.create({
            id: agency.id,
            type: agency.type,
            name: agency.name,
            phone: agency.phone,
            latitude: agency.latitude,
            longitude: agency.longitude,
            location_text: agency.location_text,
            createdAt: agency.createdAt,
        }));
    }
    async getById(id) {
        const agency = await this.prisma.agencies.findUnique({ where: { id } });
        if (!agency)
            return null;
        return agency_entity_1.Agency.create({
            id: agency.id,
            name: agency.name,
            type: agency.type,
            phone: agency.phone,
            latitude: agency.latitude,
            longitude: agency.longitude,
            createdAt: agency.createdAt,
            location_text: agency.location_text,
        });
    }
    async save(data) {
        const agency = await this.prisma.agencies.update({
            where: { id: data.id },
            data: {
                name: data.name,
                phone: data.phone,
                type: data.type,
                latitude: data.latitude,
                longitude: data.longitude,
                location_text: data.location_text,
            },
        });
        return agency_entity_1.Agency.create({
            id: agency.id,
            name: agency.name,
            type: agency.type,
            phone: agency.phone,
            latitude: agency.latitude,
            longitude: agency.longitude,
            location_text: agency.location_text,
            createdAt: agency.createdAt,
        });
    }
    async delete(id) {
        await this.prisma.agencies.delete({ where: { id } });
    }
}
exports.PrismaAgencyRepository = PrismaAgencyRepository;
//# sourceMappingURL=prisma-agency.repository.js.map