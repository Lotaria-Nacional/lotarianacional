import { Statistic } from "../../../Domain/Entities/Statistic/statistic";
import { DailyResultProps } from "../../../Domain/Entities/dailyResults/dailyResult";
import { IStatisticRepository } from "../../../Domain/Entities/Statistic/statistic.repository";
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository";

export class NumberStatisticService {
  constructor(private dailyResultRepository: IDailyResultRespository, private statisticRepository: IStatisticRepository) {}

  /** Ponto de entrada para calcular e gravar as estatísticas */
  async computeAndSaveStats() {
    // 1) Busca todos os resultados diários
    const dailyResults = await this.dailyResultRepository.getAll();

    // 2) Gera o relatório de 1 a 90
    const statsData = this.countOccurrences(dailyResults);

    // 3) Cria a entidade de estatística e guarda
    const statistic = Statistic.create({ statsData, file: "" });
    await this.statisticRepository.save(statistic);

    return statsData;
  }

  /** Conta ocorrências de cada número de 1 a 90 */
  private countOccurrences(dailyResults: DailyResultProps[]) {
    // inicializa contador de 1..90 com zero
    const occ: Record<number, number> = {};
    for (let n = 1; n <= 90; n++) occ[n] = 0;

    // percorre cada sorteio e incrementa contador
    dailyResults.forEach(dr => {
      dr.results.forEach(group => {
        [
        group.number_1,
        group.number_2,
        group.number_3,
        group.number_4,
        group.number_5
        ].forEach(num => {
          if (typeof num === "number" && occ[num] !== undefined) {
            occ[num]++;
          }
        });
      });
    });

    // converte em array ordenado
    return Object.entries(occ)
      .map(([num, times]) => ({
        sortedNumber: Number(num),
        sortedTimes: times
      }))
      .sort((a, b) => a.sortedNumber - b.sortedNumber);
  }
}
