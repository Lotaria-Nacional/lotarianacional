"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRespository = void 0;
const prisma_1 = require("../../database/prisma");
const user_1 = require("../../../domain/entities/user/user");
class PrismaUserRespository {
    async save(user) {
        await prisma_1.prisma.users.create({
            data: {
                email: user.email,
                lastName: user.lastName,
                password: user.password,
                firstName: user.firstName,
                createdAt: user.createdAt,
                profilePic: user.profilePic || undefined,
            },
        });
    }
    async getAll() {
        const users = await prisma_1.prisma.users.findMany();
        return users.map((user) => user_1.User.create({
            id: user.id,
            email: user.email,
            lastName: user.lastName,
            password: user.password,
            firstName: user.firstName,
            profilePic: user.profilePic || undefined,
        }));
    }
    async update(id, user) {
        const updatedUser = await prisma_1.prisma.users.update({
            where: { id: id },
            data: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                profilePic: user.profilePic || undefined,
            },
        });
        return user_1.User.create({
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            password: updatedUser.password,
            profilePic: updatedUser.profilePic || undefined,
        });
    }
    async getById(id) {
        const user = await prisma_1.prisma.users.findUnique({ where: { id } });
        if (!user)
            return null;
        return user_1.User.create({
            id: user.id,
            email: user.email,
            lastName: user.lastName,
            password: user.password,
            firstName: user.firstName,
            profilePic: user.profilePic ?? undefined,
        });
    }
    async delete(id) {
        await prisma_1.prisma.users.delete({ where: { id } });
    }
    async getByEmail(email) {
        const user = await prisma_1.prisma.users.findUnique({ where: { email } });
        if (!user)
            return null;
        return user_1.User.create({
            id: user.id,
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            createdAt: user.createdAt,
            profilePic: user.profilePic,
        });
    }
}
exports.PrismaUserRespository = PrismaUserRespository;
