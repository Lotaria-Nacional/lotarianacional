import { formatDate } from "../../../utils/date";

type EmissionProps = {
  id?: string; // Opcional, pois pode ser gerado automaticamente
  url: string;
  createdAt?: Date; // Opcional, pois pode ter valor padrão `now()`
  formatedData?: string;
  description?: string;
};

export class Emission {
  private constructor(private props: EmissionProps) {}

  static create(props: Omit<EmissionProps, "id" | "createdAt">): Emission {
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
