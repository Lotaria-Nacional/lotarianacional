import { Statistic } from "../../../Domain/Entities/Statistic/statistic";
import { IStatisticRepository } from "../../../Domain/Entities/Statistic/statistic.repository";

export class GetStatisticUseCase {
  constructor(private statisticRepository: IStatisticRepository) {}

  async execute() {
    try {
      const statistic = await this.statisticRepository.get();
      if (!statistic) return null;

      return Statistic.create({
        id: statistic?.id,
        file: statistic?.file,
        statsData: statistic.statsData,
        createdAt: statistic?.createdAt,
      });
    } catch (error) {
      throw error;
    }
  }
}
