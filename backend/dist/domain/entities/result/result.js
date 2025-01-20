"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(props) {
        this.id = props.id;
        this.dailyId = props.dailyId;
        this.name = props.name;
        this.hour = props.hour;
        this.videoURL = props.videoURL;
        this.number_1 = props.number_1;
        this.number_2 = props.number_2;
        this.number_3 = props.number_3;
        this.number_4 = props.number_4;
        this.number_5 = props.number_5;
        this.createdAt = props.createdAt ?? new Date();
    }
    static create(props) {
        return new Result(props);
    }
    update(updateData) {
        if (updateData.name)
            this.name = updateData.name;
        if (updateData.hour)
            this.hour = updateData.hour;
        if (updateData.videoURL)
            this.videoURL = updateData.videoURL;
        if (updateData.number_1)
            this.number_1 = updateData.number_1;
        if (updateData.number_2)
            this.number_2 = updateData.number_2;
        if (updateData.number_3)
            this.number_3 = updateData.number_3;
        if (updateData.number_4)
            this.number_4 = updateData.number_4;
        if (updateData.number_5)
            this.number_5 = updateData.number_5;
    }
}
exports.Result = Result;
