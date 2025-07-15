"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotteryResult = void 0;
class LotteryResult {
    id;
    dailyId;
    name;
    hour;
    videoURL;
    number_1;
    number_2;
    number_3;
    number_4;
    number_5;
    createdAt;
    constructor(props) {
        this.id = props.id;
        this.dailyId = props.dailyId;
        this.name = props.name;
        this.hour = props.hour;
        this.videoURL = props.videoURL ?? null;
        this.number_1 = props.number_1;
        this.number_2 = props.number_2;
        this.number_3 = props.number_3;
        this.number_4 = props.number_4;
        this.number_5 = props.number_5;
        this.createdAt = props.createdAt ?? new Date();
    }
    static create(props) {
        return new LotteryResult(props);
    }
    update(updateData) {
        if (updateData.videoURL)
            this.videoURL = updateData.videoURL;
    }
}
exports.LotteryResult = LotteryResult;
//# sourceMappingURL=lottery-result.js.map