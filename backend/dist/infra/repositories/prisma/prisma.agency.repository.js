"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAgencyRepository = void 0;
const prisma_1 = require("../../Database/prisma");
const Agency_1 = require("../../../Domain/Entities/Agency/Agency");
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
    async getAll(page = 1, pageSize = 1) {
        const isPaginated = page && pageSize;
        // Se a paginação for ativada
        if (isPaginated) {
            const skip = (page - 1) * pageSize;
            const take = pageSize;
            const totalRecords = await prisma_1.prisma.agencies.count();
            const totalPages = Math.ceil(totalRecords / pageSize);
            const agencies = await prisma_1.prisma.agencies.findMany({
                skip,
                take,
                orderBy: {
                    createdAt: "desc", // Ordena por data de criação
                },
            });
            if (agencies.length === 0)
                return [];
            return {
                data: agencies.map((agency) => Agency_1.Agency.create({
                    id: agency.id,
                    name: agency.name,
                    phone: agency.phone,
                    latitude: agency.latitude,
                    longitude: agency.longitude,
                    location_text: agency.location_text,
                    createdAt: agency.createdAt,
                })),
                totalPages,
                totalRecords,
            };
        }
        // Caso contrário, retorne todas as agências
        const agencies = await prisma_1.prisma.agencies.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        if (agencies.length === 0)
            return [];
        return {
            data: agencies.map((agency) => Agency_1.Agency.create({
                id: agency.id,
                name: agency.name,
                phone: agency.phone,
                latitude: agency.latitude,
                longitude: agency.longitude,
                location_text: agency.location_text,
                createdAt: agency.createdAt,
            })),
            totalPages: 1, // Como não há paginação, definimos como 1
            totalRecords: agencies.length,
        };
    }
    async getById(id) {
        const agency = await prisma_1.prisma.agencies.findUnique({ where: { id } });
        if (!agency)
            return null;
        return Agency_1.Agency.create({
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
        return Agency_1.Agency.create({
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
