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

  static create(props: Omit<EmissionProps, "id">): Emission {
    const currentDate = new Date();
    return new Emission({
      ...props,
      createdAt: currentDate,
      formatedData: formatDate(currentDate),
    });
  }
  toJSON() {
    return this.props;
  }
}
