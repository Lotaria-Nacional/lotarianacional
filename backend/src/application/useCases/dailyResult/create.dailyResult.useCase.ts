import { formatDate } from "../../../utils/date";
import { Result } from "../../../Domain/Entities/Result/Result";
import { CreateResultInputDTO } from "../result/create.result.useCase";
import { Emission } from "../../../Domain/Entities/emission/emission.entity";
import { DailyResult } from "../../../Domain/Entities/dailyResults/dailyResult";
import { IEmissionRepository } from "../../../Domain/Entities/emission/emission.repository";
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository";

export class CreateDailyResultUseCase {
  constructor(private dailyResultRespository: IDailyResultRespository, private emissionRepository: IEmissionRepository) {}

  async execute(data: CreateResultInputDTO): Promise<void> {
    const today = new Date();

    try {
      let dailyResult = await this.dailyResultRespository.getLast();

      if (!dailyResult || this.isNewDailyResultRequired(dailyResult)) {
        dailyResult = this.createNewDailyResult(today, [this.createNewResult(data)]);
        await this.dailyResultRespository.save(dailyResult);
      } else {
        dailyResult.results.forEach((result) => {
          if (result.name === data.name) {
            throw new Error("Este resultado já foi inserido.");
          }
        });
        dailyResult.results.push(this.createNewResult(data));
        await this.dailyResultRespository.update(dailyResult);
      }
      const emission = Emission.create({
        description: data.name,
        url: data.videoURL,
      });
      await this.emissionRepository.save(emission);
      // await this.excelService.generateAndSaveExcel();
    } catch (error) {
      console.error("Erro ao criar o resultado do dia:", error);
      throw error;
    }
  }

  private createNewDailyResult(date: Date, results: Result[]): DailyResult {
    return DailyResult.create({
      date,
      results,
      formatedDate: formatDate(date),
    });
  }
  private isNewDailyResultRequired(dailyResult: DailyResult): boolean {
    return dailyResult.results.length >= 4;
  }
  private createNewResult(data: CreateResultInputDTO): Result {
    return Result.create({
      name: data.name,
      hour: data.hour,
      videoURL: data.videoURL,
      dailyId: data.dailyId,
      number_1: data.number_1,
      number_2: data.number_2,
      number_3: data.number_3,
      number_4: data.number_4,
      number_5: data.number_5,
    });
  }
}
