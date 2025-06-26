import { Emission } from "../../../enterprise/entities/emission.entity";
import { IEmissionRepository } from "../../interfaces/emission.repository";

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
