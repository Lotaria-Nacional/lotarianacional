import { Prisma, PrismaClient } from "@prisma/client"
import { User } from "../../../enterprise/entities/user"
import { IUserRepository } from "../../../application/interfaces/user.repository"

export class PrismaUserRespository implements IUserRepository {
  constructor(private prisma:PrismaClient | Prisma.TransactionClient){}

  async save(user: User): Promise<void> {
    await this.prisma.users.create({
      data: {
        role: user.role,
        email: user.email,
        lastName: user.lastName,
        password: user.password,
        firstName: user.firstName,
        createdAt: user.createdAt,
        profilePic: (user.profilePic as string) || undefined,
      },
    })
  }

  async getAll(): Promise<User[]> {
    const users = await this.prisma.users.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return users.map((user) =>
      User.create({
        id: user.id,
        email: user.email,
        role: user.role,
        lastName: user.lastName,
        password: user.password,
        firstName: user.firstName,
        profilePic: user.profilePic as string,
      })
    )
  }

  async update(id: string, user: User): Promise<User> {
    const updatedUser = await this.prisma.users.update({
      where: { id: id },
      data: {
        email: user.email,
        firstName: user.firstName,
        role: user.role,
        lastName: user.lastName,
        password: user.password,
        profilePic: user.profilePic as string,
      },
    })
    return User.create({
      email: updatedUser.email,
      role: updatedUser.role,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      password: updatedUser.password,
      profilePic: updatedUser.profilePic,
    })
  }

  async getById(id: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({ where: { id } })

    if (!user) return null

    return User.create({
      id: user.id,
      email: user.email,
      role: user.role,
      lastName: user.lastName,
      password: user.password,
      firstName: user.firstName,
      profilePic: user.profilePic ?? undefined,
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.users.delete({ where: { id } })
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({ where: { email } })
    if (!user) return null
    return User.create({
      id: user.id,
      email: user.email,
      password: user.password,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
      profilePic: user.profilePic as string,
    })
  }
}
