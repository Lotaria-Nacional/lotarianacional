"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyLotteryResult = void 0;
class DailyLotteryResult {
    id;
    date;
    createdAt;
    results;
    formatedDate;
    constructor(props) {
        this.id = props.id;
        this.results = props.results;
        this.date = props.date ?? new Date();
        this.formatedDate = props.formatedDate;
    }
    static create(props) {
        return new DailyLotteryResult(props);
    }
}
exports.DailyLotteryResult = DailyLotteryResult;
//# sourceMappingURL=daily-lottery-result.js.map