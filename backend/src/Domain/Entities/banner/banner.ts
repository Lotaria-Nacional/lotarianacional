type BannerProps = {
  id?: string
  desktop_banner_1: string | any
  desktop_banner_2: string | any
  desktop_banner_3: string | any
  mobile_banner_1: string | any
  mobile_banner_2: string | any
  mobile_banner_3: string | any
}
export type UpdateBanners = {
  desktop_banner_1?: string | any
  desktop_banner_2?: string | any
  desktop_banner_3?: string | any
  mobile_banner_1?: string | any
  mobile_banner_2?: string | any
  mobile_banner_3?: string | any
}

export class Banner {
  public id?: string
  public desktop_banner_1: string | any
  public desktop_banner_2: string | any
  public desktop_banner_3: string | any
  public mobile_banner_1: string | any
  public mobile_banner_2: string | any
  public mobile_banner_3: string | any

  constructor(props: BannerProps) {
    this.desktop_banner_1 = props.desktop_banner_1
    this.desktop_banner_2 = props.desktop_banner_2
    this.desktop_banner_3 = props.desktop_banner_3
    this.mobile_banner_1 = props.mobile_banner_1
    this.mobile_banner_2 = props.mobile_banner_2
    this.mobile_banner_3 = props.mobile_banner_3
  }

  static create(props: BannerProps) {
    return new Banner(props)
  }

  update(data: UpdateBanners) {
    if (data.desktop_banner_1) this.desktop_banner_1 = data.desktop_banner_1
    if (data.desktop_banner_2) this.desktop_banner_2 = data.desktop_banner_2
    if (data.desktop_banner_3) this.desktop_banner_3 = data.desktop_banner_3
    if (data.mobile_banner_1) this.mobile_banner_1 = data.mobile_banner_1
    if (data.mobile_banner_2) this.mobile_banner_2 = data.mobile_banner_2
    if (data.mobile_banner_3) this.mobile_banner_3 = data.mobile_banner_3
  }
}
