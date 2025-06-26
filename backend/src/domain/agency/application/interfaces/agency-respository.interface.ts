import { Agency } from "../../enterprise/entities/agency.entity";

export interface IAgencyRespository {
  create(agency: Agency): Promise<void>;
  getAll(): Promise<Agency[]>;
  getById(id: string): Promise<Agency | null>;
  save(id: string, data: Partial<Agency>): Promise<Agency>;
  delete(id: string): Promise<void>;
}