"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistic = void 0;
class Statistic {
    id;
    file;
    createdAt;
    statsData;
    constructor(props) {
        this.id = props.id;
        this.file = "empty";
        this.createdAt = props.createdAt ?? new Date();
        this.statsData = props.statsData;
    }
    static create(data) {
        return new Statistic(data);
    }
}
exports.Statistic = Statistic;
//# sourceMappingURL=statistic.js.map