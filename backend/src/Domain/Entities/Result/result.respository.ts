import { Result } from "./Result";

export type UpdateResult = {
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

export interface IResultRepository {
  getAll(): Promise<Result[]>;
  delete(id: string): Promise<void>;
  save(result: Result): Promise<void>;
  getById(id: string): Promise<Result | null>;
  update(data: UpdateResult): Promise<Result | null>;
}
