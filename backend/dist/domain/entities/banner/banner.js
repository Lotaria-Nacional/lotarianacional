"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
class Banner {
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        return new Banner({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        });
    }
    update(props) {
        Object.assign(this.props, props);
    }
    toJSON() {
        return this.props;
    }
}
exports.Banner = Banner;
