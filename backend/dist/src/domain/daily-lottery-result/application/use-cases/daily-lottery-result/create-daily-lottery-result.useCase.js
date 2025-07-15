"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDailyResultUseCase = void 0;
const emission_entity_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/emission.entity");
const lottery_result_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/lottery-result");
const daily_lottery_result_1 = require("../../../../../domain/daily-lottery-result/enterprise/entities/daily-lottery-result");
const date_1 = require("../../../../../shared/utils/date");
class CreateDailyResultUseCase {
    dailyResultRepo;
    emissionRepo;
    numberStatisticService;
    constructor(dailyResultRepo, emissionRepo, numberStatisticService) {
        this.dailyResultRepo = dailyResultRepo;
        this.emissionRepo = emissionRepo;
        this.numberStatisticService = numberStatisticService;
    }
    async execute(data) {
        const today = new Date();
        try {
            let dailyResult = await this.dailyResultRepo.getLast();
            const newResult = this.buildResult(data);
            if (!dailyResult || this.shouldCreateNewDailyResult(dailyResult)) {
                dailyResult = this.buildNewDailyResult(today, [newResult]);
                await this.dailyResultRepo.create(dailyResult);
            }
            else {
                this.ensureResultIsUnique(dailyResult, data.name);
                dailyResult.results.push(newResult);
                await this.dailyResultRepo.save(dailyResult);
            }
            if (this.hasValidVideoURL(data.videoURL)) {
                await this.saveEmission(data.name, data.videoURL);
            }
            await this.numberStatisticService.computeAndSaveStats();
        }
        catch (error) {
            console.error("Erro ao criar o resultado do dia:", error);
            throw error;
        }
    }
    shouldCreateNewDailyResult(dailyResult) {
        return dailyResult.results.length >= 4;
    }
    ensureResultIsUnique(dailyResult, name) {
        const exists = dailyResult.results.some((result) => result.name === name);
        if (exists) {
            throw new Error("Este resultado já foi inserido.");
        }
    }
    buildNewDailyResult(date, results) {
        return daily_lottery_result_1.DailyLotteryResult.create({
            date,
            results,
            formatedDate: (0, date_1.formatDate)(date),
        });
    }
    buildResult(data) {
        return lottery_result_1.LotteryResult.create({
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
    hasValidVideoURL(url) {
        return typeof url === "string" && url.trim().length > 0;
    }
    async saveEmission(description, url) {
        const emission = emission_entity_1.Emission.create({ description, url });
        await this.emissionRepo.save(emission);
    }
}
exports.CreateDailyResultUseCase = CreateDailyResultUseCase;
//# sourceMappingURL=create-daily-lottery-result.useCase.js.map