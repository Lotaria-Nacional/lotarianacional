"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emission = void 0;
const date_1 = require("../../../../shared/utils/date");
class Emission {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        const currentDate = new Date();
        return new Emission({
            ...props,
            url: props.url ?? null,
            createdAt: props.createdAt ?? currentDate,
            formatedData: props.formatedData ?? (0, date_1.formatDate)(currentDate),
        });
    }
    toJSON() {
        return this.props;
    }
}
exports.Emission = Emission;
//# sourceMappingURL=emission.entity.js.map