import { formatDate } from "@/shared/utils/date";

type EmissionProps = {
  id?: string;
  url?: string | null;
  createdAt?: Date;
  description?: string;
  formatedData?: string;
};

export class Emission {
  private constructor(private props: EmissionProps) {}

  static create(props: EmissionProps): Emission {
    const currentDate = new Date();
    return new Emission({
      ...props,
      url: props.url ?? null,
      createdAt: props.createdAt ?? currentDate,
      formatedData: props.formatedData ?? formatDate(currentDate),
    });
  }
  toJSON() {
    return this.props;
  }
}
