import * as XLSX from "xlsx";

import { Statistic } from "../../../Domain/Entities/Statistic/statistic";
import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
import { IExcelService } from "../../../Domain/services/xlsx.service.interface";
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
import { DailyResultProps } from "../../../Domain/Entities/dailyResults/dailyResult";
import { IStatisticRepository } from "../../../Domain/Entities/Statistic/statistic.repository";
import { IDailyResultRespository } from "../../../Domain/Entities/dailyResults/dailyResult.repository";

export class XLSXService implements IExcelService {
  constructor(private fileUploadService: IFileUpload, private statisticRespository: IStatisticRepository, private dailyResultRepository: IDailyResultRespository) {}

  async generateAndSaveExcel() {
    try {
      const dailyResults = await this.dailyResultRepository.getAll();
      const existingStatistic = await this.statisticRespository.get();

      const { fileBuffer, formatedStats } = await this.createExcelBuffer(dailyResults);

      if (!fileBuffer || fileBuffer.length === 0) {
        throw new Error("Erro ao gerar o ficheiro excel.");
      }

      if (existingStatistic && existingStatistic.id) {
        await this.handleExistingStatistic(existingStatistic, existingStatistic.id!);
      }

      const excelLinkURL = await this.uploadNewStatistic(fileBuffer);

      const excelFile = Statistic.create({
        file: excelLinkURL,
        statsData: formatedStats,
      });

      await this.statisticRespository.save(excelFile);
    } catch (error) {
      console.error("Erro ao gerar e salvar o excel: ", error);
      throw error;
    }
  }

  private async createExcelBuffer(dailyResults: DailyResultProps[]): Promise<{ formatedStats: Record<number, number>[]; fileBuffer: Buffer }> {
    const data = this.formatExcelData(dailyResults);
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Estatísticas");

    const formatedStats = this.formatStats(data);

    return {
      formatedStats,
      fileBuffer: XLSX.write(workbook, { bookType: "xlsx", type: "buffer" }),
    };
  }
  private formatStats(data: string[][]) {
    let occurance: Record<string, number> = {};

    for (let i = 1; i < data.length; i++) {
      const row = data[i].slice(1);

      row.forEach((cell) => {
        const numbers = cell
          .split(",")
          .map((item) => item.trim())
          .filter((el) => el !== "");

        numbers.forEach((num) => {
          occurance[num] = (occurance[num] || 0) + 1;
        });
      });
    }

    const result = Object.entries(occurance).map(([key, value]) => ({
      sortedNumber: parseInt(key),
      sortedTimes: value,
    }));

    return result;
  }
  private formatExcelData(data: any[]): any[][] {
    const header = ["data", "fezada", "kazola", "aqueceu", "eskebra"];
    const dataRes = this.handleExcelCell(data);
    const arrMatriz = [header, ...dataRes];
    return arrMatriz;
  }
  private handleExcelArrayData(arr: any[]): string {
    if (!arr || arr.length === 0) {
      return "";
    }

    return arr.map((res) => [res.number_1, res.number_2, res.number_3, res.number_4, res.number_5].map((num) => (num !== undefined ? num : null)).join(", ")).join(", ");
  }
  private handleExcelCell = (data: DailyResultProps[]) => {
    const rs = data.map((item) => {
      const date = item.date || new Date();

      let fezada = this.handleExcelArrayData(item.results.filter((res) => res.name === "fezada"));
      let kazola = this.handleExcelArrayData(item.results.filter((res) => res.name === "kazola"));
      let aqueceu = this.handleExcelArrayData(item.results.filter((res) => res.name === "aqueceu"));
      let eskebra = this.handleExcelArrayData(item.results.filter((res) => res.name === "eskebra"));

      return [date, fezada, kazola, aqueceu, eskebra];
    });

    return rs;
  };
  private async handleExistingStatistic(existingStatistc: Statistic, statisticID: string): Promise<void> {
    const existingPublicID = getCloudinaryPublicId(existingStatistc.file);
    if (existingPublicID) {
      try {
        await this.fileUploadService.delete(existingPublicID, "raw");
        await this.statisticRespository.delete(statisticID);
      } catch (error) {
        console.error("Erro: ", error);
        throw error;
      }
    }
  }
  private async uploadNewStatistic(fileBuffer: Buffer): Promise<string> {
    return this.fileUploadService.upload(fileBuffer, "lotaria_nacional/statistcs", "raw");
  }
}
