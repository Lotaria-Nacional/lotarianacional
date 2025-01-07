export type BannerProps = {
  id?: string;
  desk_banner_1?: string;
  desk_banner_2?: string;
  desk_banner_3?: string;
  mob_banner_1?: string;
  mob_banner_2?: string;
  mob_banner_3?: string;
};

export class Banner {
  constructor(public props: BannerProps) {}

  static create(props: BannerProps): Banner {
    return new Banner(props);
  }

  update(data: Partial<BannerProps>): void {
    if (data.desk_banner_1) this.props.desk_banner_1 = data.desk_banner_1;
    if (data.desk_banner_2) this.props.desk_banner_2 = data.desk_banner_2;
    if (data.desk_banner_3) this.props.desk_banner_3 = data.desk_banner_3;
    if (data.mob_banner_1) this.props.mob_banner_1 = data.mob_banner_1;
    if (data.mob_banner_2) this.props.mob_banner_2 = data.mob_banner_2;
    if (data.mob_banner_3) this.props.mob_banner_3 = data.mob_banner_3;
  }
}
