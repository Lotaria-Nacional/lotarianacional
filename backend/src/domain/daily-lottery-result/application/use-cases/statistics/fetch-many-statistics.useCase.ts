import { IStatisticRepository } from "../../interfaces/statistic.repository";
import { Statistic } from "@/domain/daily-lottery-result/enterprise/entities/statistic";

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
