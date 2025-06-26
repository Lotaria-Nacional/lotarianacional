import { LotteryResult } from "../../enterprise/entities/lottery-result";

export type UpdateLotteryResult = {
  id: string;
  name?: string;
  hour?: string;
  number_1?: number;
  number_2?: number;
  number_3?: number;
  number_4?: number;
  number_5?: number;
  videoURL?: string;
};

export interface ILotteryResultRepository {
  getAll(): Promise<LotteryResult[]>;
  delete(id: string): Promise<void>;
  save(result: LotteryResult): Promise<void>;
  getById(id: string): Promise<LotteryResult | null>;
  update(data: UpdateLotteryResult): Promise<LotteryResult | null>;
}