export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  profilePic?: string | Buffer
  createdAt: Date
}