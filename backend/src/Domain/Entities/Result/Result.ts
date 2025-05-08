export type ResultProps = {
  id?: string;
  hour: string;
  name: string;
  number_1: number;
  number_2: number;
  number_3: number;
  number_4: number;
  number_5: number;
  dailyId?: string;
  videoURL?: string | null;
  createdAt?: Date;
};
export type UpdateNumberInputDTO = {
  name?: string;
  hour?: string;
  number_1?: number;
  number_2?: number;
  number_3?: number;
  number_4?: number;
  number_5?: number;
  videoURL?: string | null;
};

export class Result {
  public id?: string;
  public dailyId?: string;
  public name: string;
  public hour: string;
  public videoURL?: string | null;
  public number_1: number;
  public number_2: number;
  public number_3: number;
  public number_4: number;
  public number_5: number;
  public createdAt: Date;

  constructor(props: ResultProps) {
    this.id = props.id;
    this.dailyId = props.dailyId;
    this.name = props.name;
    this.hour = props.hour;
    this.videoURL = props.videoURL ?? null;
    this.number_1 = props.number_1;
    this.number_2 = props.number_2;
    this.number_3 = props.number_3;
    this.number_4 = props.number_4;
    this.number_5 = props.number_5;
    this.createdAt = props.createdAt ?? new Date();
  }

  static create(props: ResultProps) {
    return new Result(props);
  }

  update(updateData: UpdateNumberInputDTO): void {
    if (updateData.videoURL) this.videoURL = updateData.videoURL;
  }
}
