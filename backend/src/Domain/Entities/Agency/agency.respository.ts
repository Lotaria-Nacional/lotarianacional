import { Agency } from "./Agency";

export interface IAgencyRespository {
  save(agency: Agency): Promise<void>;
  getAll(): Promise<Agency[]>;
  getById(id: string): Promise<Agency | null>;
  update(id: string, data: Partial<Agency>): Promise<Agency>;
  delete(id: string): Promise<void>;
}
