import { Emission } from "../../../Domain/Entities/emission/emission.entity";
import { IEmissionRepository } from "../../../Domain/Entities/emission/emission.repository";

export class GetEmissionUseCase {
  constructor(private emissionRepository: IEmissionRepository) {}

  async execute(): Promise<Emission[]> {
    try {
      const emissions = await this.emissionRepository.getAll();
      return emissions.map((emission) =>
        Emission.create({
          url: emission.toJSON().url,
          description: emission.toJSON().description,
          formatedData: emission.toJSON().formatedData,
        })
      );
    } catch (error) {
      throw error;
    }
  }
}
