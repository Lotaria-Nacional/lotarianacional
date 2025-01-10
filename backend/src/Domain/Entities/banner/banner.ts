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

  update(data: BannerProps): void {
    Object.assign(this.props, data);
  }
}
