import { prisma } from "../../Database/prisma"
import { User } from "../../../Domain/Entities/User/User"
import { IUserRepository } from "../../../Domain/Entities/User/IUserRepository"

export class PrismaUserRespository implements IUserRepository {
  async save(user: User): Promise<void> {
    await prisma.users.create({
      data: {
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
    const users = await prisma.users.findMany()

    return users.map((user) =>
      User.create({
        id: user.id,
        email: user.email,
        lastName: user.lastName,
        password: user.password,
        firstName: user.firstName,
        profilePic: (user.profilePic as string) || undefined,
      })
    )
  }

  async update(id: string, user: User): Promise<User> {
    const updatedUser = await prisma.users.update({
      where: { id: id },
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        profilePic: (user.profilePic as string) || undefined,
      },
    })
    return User.create({
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      password: updatedUser.password,
      profilePic: updatedUser.profilePic || undefined,
    })
  }

  async getById(id: string): Promise<User | null> {
    const user = await prisma.users.findUnique({ where: { id } })

    if (!user) return null

    return User.create({
      id: user.id,
      email: user.email,
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
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
      profilePic: user.profilePic as string,
    })
  }
}
