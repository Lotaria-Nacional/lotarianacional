import { Agency } from "./Agency";

export type IAgenciesResponse = {
  data: Agency[] | [];
  totalPages: number;
  totalRecords: number;
};

export interface IAgencyRespository {
  save(agency: Agency): Promise<void>;
  getAll(page: number, pageSize: number): Promise<IAgenciesResponse | []>;
  getById(id: string): Promise<Agency | null>;
  update(id: string, data: Partial<Agency>): Promise<Agency>;
  delete(id: string): Promise<void>;
}
