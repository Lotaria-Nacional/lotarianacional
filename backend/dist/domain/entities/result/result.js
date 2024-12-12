"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(props) {
        this.id = props.id;
        this.dailyId = props.dailyId;
        this.name = props.name;
        this.hour = props.hour;
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
    update(number_1, number_2, number_3, number_4, number_5) {
        if (number_1)
            this.number_1 = number_1;
        if (number_2)
            this.number_2 = number_2;
        if (number_3)
            this.number_3 = number_3;
        if (number_4)
            this.number_4 = number_4;
        if (number_5)
            this.number_5 = number_5;
    }
}
exports.Result = Result;
