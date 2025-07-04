import { IEmissionRepository } from "../../interfaces/emission.repository";
import { Emission } from "../../../../../domain/daily-lottery-result/enterprise/entities/emission.entity";

export class FetchManyEmissionUseCase {
  constructor(private emissionRepository: IEmissionRepository) {}

  async execute(): Promise<Emission[]> {
    try {
      const emissions = await this.emissionRepository.getAll();

      return emissions;
    } catch (error) {
      throw error;
    }
  }
}
