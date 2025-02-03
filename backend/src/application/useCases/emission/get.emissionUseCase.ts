import { Emission } from "../../../Domain/Entities/emission/emission.entity";
import { IEmissionRepository } from "../../../Domain/Entities/emission/emission.repository";

export class GetEmissionUseCase {
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
