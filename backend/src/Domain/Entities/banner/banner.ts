export type BannerProps = {
  id?: string;
  device: string;
  image: string;
  createdAt?: Date;
};

export class Banner {
  constructor(public props: BannerProps) {}

  static create(props: BannerProps) {
    return new Banner({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    });
  }

  update(props: Partial<BannerProps>) {
    Object.assign(this.props, props);
  }

  toJSON() {
    return this.props;
  }
}
