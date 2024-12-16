export type UserProps = {
  id?: string
  role: string
  email: string
  lastName: string
  password: string
  createdAt?: Date
  firstName: string
  profilePic?: string | Buffer
}

export class User {
  public readonly id?: string
  public email: string
  public firstName: string
  public role: string
  public lastName: string
  public password: string
  public profilePic?: string | Buffer
  public createdAt: Date

  private constructor(props: UserProps) {
    this.id = props.id
    this.email = props.email
    this.firstName = props.firstName
    this.role = props.role
    this.lastName = props.lastName
    this.password = props.password
    this.profilePic = props.profilePic
    this.createdAt = props.createdAt ?? new Date()
  }

  static create(props: UserProps): User {
    // if (!props.email || !props.firstName || !props.lastName || !props.role || !props.password) {
    //   throw new Error("Todos os campos são obrigatórios.")
    // }
    return new User(props)
  }

  update(data: Partial<User>) {
    if (data.role) this.role = data.role
    if (data.email) this.email = data.email
    if (data.profilePic) this.profilePic = data.role
    if (data.lastName) this.lastName = data.lastName
    if (data.firstName) this.firstName = data.firstName
  }
}
