import { formatDate } from "../../../utils/date";

type EmissionProps = {
  id?: string;
  url: string;
  createdAt?: Date;
  formatedData?: string;
  description?: string;
};

export class Emission {
  private constructor(private props: EmissionProps) {}

  static create(props: EmissionProps): Emission {
    const currentDate = new Date();
    return new Emission({
      ...props,
      createdAt: props.createdAt || currentDate,
      formatedData: props.formatedData || formatDate(currentDate),
    });
  }
  toJSON() {
    return this.props;
  }
}
