"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyResult = void 0;
class DailyResult {
    constructor(props) {
        this.id = props.id;
        this.results = props.results;
        this.date = props.date ?? new Date();
        this.formatedDate = props.formatedDate;
    }
    static create(props) {
        return new DailyResult(props);
    }
}
exports.DailyResult = DailyResult;
