"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAgencyRepository = void 0;
const prisma_1 = require("../../database/prisma");
const agency_1 = require("../../../domain/entities/agency/agency");
class PrismaAgencyRepository {
    async save(agency) {
        await prisma_1.prisma.agencies.create({
            data: {
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
        const agencies = await prisma_1.prisma.agencies.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        if (agencies.length === 0)
            return [];
        return agencies.map((agency) => agency_1.Agency.create({
            id: agency.id,
            name: agency.name,
            phone: agency.phone,
            latitude: agency.latitude,
            longitude: agency.longitude,
            location_text: agency.location_text,
            createdAt: agency.createdAt,
        }));
    }
    async getById(id) {
        const agency = await prisma_1.prisma.agencies.findUnique({ where: { id } });
        if (!agency)
            return null;
        return agency_1.Agency.create({
            id: agency.id,
            name: agency.name,
            phone: agency.phone,
            latitude: agency.latitude,
            longitude: agency.longitude,
            createdAt: agency.createdAt,
            location_text: agency.location_text,
        });
    }
    async update(id, data) {
        const agency = await prisma_1.prisma.agencies.update({
            where: { id },
            data: {
                name: data.name,
                phone: data.phone,
                latitude: data.latitude,
                longitude: data.longitude,
                location_text: data.location_text,
            },
        });
        return agency_1.Agency.create({
            id: agency.id,
            name: agency.name,
            phone: agency.phone,
            latitude: agency.latitude,
            longitude: agency.longitude,
            location_text: agency.location_text,
            createdAt: agency.createdAt,
        });
    }
    async delete(id) {
        await prisma_1.prisma.agencies.delete({ where: { id } });
    }
}
exports.PrismaAgencyRepository = PrismaAgencyRepository;
