"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyResult = void 0;
class DailyResult {
    constructor(props) {
        this.id = props.id;
        this.date = props.date;
        this.results = props.results;
    }
    static create(props) {
        return new DailyResult(props);
    }
}
exports.DailyResult = DailyResult;
