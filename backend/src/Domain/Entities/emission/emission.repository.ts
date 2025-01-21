import { Emission } from "./emission.entity";

export interface IEmissionRepository {
  save(emission: Emission): Promise<void>;
  getAll(): Promise<Emission[]>;
}
