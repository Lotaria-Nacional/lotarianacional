export type BannerProps = {
  id?: string
  desk_banner_1: string | Buffer
  desk_banner_2: string | Buffer
  desk_banner_3: string | Buffer
  mob_banner_1: string | Buffer
  mob_banner_2: string | Buffer
  mob_banner_3: string | Buffer
}

export class Banner {
  public readonly id?: string
  public desk_banner_1: string | Buffer
  public desk_banner_2: string | Buffer
  public desk_banner_3: string | Buffer
  public mob_banner_1: string | Buffer
  public mob_banner_2: string | Buffer
  public mob_banner_3: string | Buffer

  constructor(props: BannerProps) {
    this.id = props.id
    this.desk_banner_1 = props.desk_banner_1
    this.desk_banner_2 = props.desk_banner_2
    this.desk_banner_3 = props.desk_banner_3
    this.mob_banner_1 = props.mob_banner_1
    this.mob_banner_2 = props.mob_banner_2
    this.mob_banner_3 = props.mob_banner_3
  }

  static create(props: BannerProps): Banner {
    // this.validateProps(props)
    return new Banner(props)
  }

  update(data: Partial<Banner>): void {
    if (data.desk_banner_1) this.desk_banner_1 = data.desk_banner_1
    if (data.desk_banner_2) this.desk_banner_2 = data.desk_banner_2
    if (data.desk_banner_3) this.desk_banner_3 = data.desk_banner_3
    if (data.mob_banner_1) this.mob_banner_1 = data.mob_banner_1
    if (data.mob_banner_2) this.mob_banner_2 = data.mob_banner_2
    if (data.mob_banner_3) this.mob_banner_3 = data.mob_banner_3
  }

  private static validateProps(props: BannerProps) {
    if (
      !props.desk_banner_1 ||
      !props.desk_banner_2 ||
      !props.desk_banner_3 ||
      !props.mob_banner_1 ||
      !props.mob_banner_2 ||
      !props.mob_banner_3
    )
      throw new Error("Todos os banners são obrigatórios.")
  }
}
