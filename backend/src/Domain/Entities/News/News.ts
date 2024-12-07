export type NewsProps = {
  id?: string
  title: string
  image: string | Buffer
  description: string
  createdAt?: Date
}

export class News {
  public readonly id?: string
  public title: string
  public image: string | Buffer
  public description: string
  public readonly createdAt: Date

  constructor(props: NewsProps) {
    this.id = props.id
    this.title = props.title
    this.image = props.image
    this.description = props.description
    this.createdAt = props.createdAt || new Date()
  }

  static create(props: NewsProps): News {
    const { description, image, title } = props
    if (!description || !image || !title)
      throw new Error("Todos os campos são obrigatórios.")

    return new News(props)
  }

  update(data: { title?: string; description?: string; image?: string | Buffer}): void {
    if (data.title) this.title = data.title
    if (data.image) this.image = data.image
    if (data.description) this.description = data.description
  }
}
