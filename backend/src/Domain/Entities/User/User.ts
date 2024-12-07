export type UserProps = {
  id?: string
  email: string
  firstName: string
  lastName: string
  password: string
  profilePic?: string | Buffer
  createdAt?: Date
}

export class User {
  public readonly id?: string
  public email: string
  public firstName: string
  public lastName: string
  public password: string
  public profilePic?: string | Buffer
  public createdAt: Date

  private constructor(props: UserProps) {
    this.id = props.id
    this.email = props.email
    this.firstName = props.firstName
    this.lastName = props.lastName
    this.password = props.password
    this.profilePic = props.profilePic
    this.createdAt = props.createdAt ?? new Date()
  }

  static create(props: UserProps): User {
    if (!props.email || !props.firstName || !props.lastName || !props.password) {
      throw new Error("Missing required fields")
    }
    return new User(props)
  }
  
}
