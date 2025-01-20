"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRespository = void 0;
const prisma_1 = require("../../Database/prisma");
const User_1 = require("../../../Domain/Entities/User/User");
class PrismaUserRespository {
    async save(user) {
        await prisma_1.prisma.users.create({
            data: {
                role: user.role,
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
        const users = await prisma_1.prisma.users.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return users.map((user) => User_1.User.create({
            id: user.id,
            email: user.email,
            role: user.role,
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
                role: user.role,
                lastName: user.lastName,
                password: user.password,
                profilePic: user.profilePic || undefined,
            },
        });
        return User_1.User.create({
            email: updatedUser.email,
            role: updatedUser.role,
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
        return User_1.User.create({
            id: user.id,
            email: user.email,
            role: user.role,
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
        return User_1.User.create({
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            createdAt: user.createdAt,
            profilePic: user.profilePic,
        });
    }
}
exports.PrismaUserRespository = PrismaUserRespository;
