import { prisma } from "../../../../../core/lib/prisma"
import { IUserRepository } from "../../../application/interfaces/user.repository"
import { User } from "../../../enterprise/entities/user"

export class PrismaUserRespository implements IUserRepository {
  async save(user: User): Promise<void> {
    await prisma.users.create({
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
    const users = await prisma.users.findMany({
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
    const updatedUser = await prisma.users.update({
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
    const user = await prisma.users.findUnique({ where: { id } })

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
    await prisma.users.delete({ where: { id } })
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = await prisma.users.findUnique({ where: { email } })
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
