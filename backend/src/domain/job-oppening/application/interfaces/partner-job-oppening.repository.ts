import { PaginationParams } from "../../../../core/@types/pagination-params";
import { PartnerJobOppening } from "../../enterprise/entities/partner-job-oppening";

export interface IPartnerJobOppeningRepository {
  create(data: PartnerJobOppening): Promise<void>;
  save(data: PartnerJobOppening): Promise<void>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<PartnerJobOppening | null>;
  fetchMany(params?: PaginationParams): Promise<PartnerJobOppening[]>;
  countAll(): Promise<number>;
}
