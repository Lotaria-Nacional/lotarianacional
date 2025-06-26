import { Statistic } from "../../../enterprise/entities/statistic";
import { IStatisticRepository } from "../../interfaces/statistic.repository";

export class FetchManyStatisticsUseCase {
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
