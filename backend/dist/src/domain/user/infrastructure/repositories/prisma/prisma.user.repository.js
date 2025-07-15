"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRespository = void 0;
const user_1 = require("../../../enterprise/entities/user");
class PrismaUserRespository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(user) {
        await this.prisma.users.create({
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
    async save(user) {
        const updatedUser = await this.prisma.users.update({
            where: { id: user.id },
            data: {
                email: user.email,
                firstName: user.firstName,
                role: user.role,
                lastName: user.lastName,
                password: user.password,
                profilePic: user.profilePic,
            },
        });
        return user_1.User.create({
            email: updatedUser.email,
            role: updatedUser.role,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            password: updatedUser.password,
            profilePic: updatedUser.profilePic,
        });
    }
    async getAll() {
        const users = await this.prisma.users.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return users.map((user) => user_1.User.create({
            id: user.id,
            email: user.email,
            role: user.role,
            lastName: user.lastName,
            password: user.password,
            firstName: user.firstName,
            profilePic: user.profilePic,
        }));
    }
    async getById(id) {
        const user = await this.prisma.users.findUnique({ where: { id } });
        if (!user)
            return null;
        return user_1.User.create({
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
        await this.prisma.users.delete({ where: { id } });
    }
    async getByEmail(email) {
        const user = await this.prisma.users.findUnique({ where: { email } });
        if (!user)
            return null;
        return user_1.User.create({
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
//# sourceMappingURL=prisma.user.repository.js.map