"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
class BaseEntity {
    _id;
    _props;
    constructor(props, id) {
        this._props = props;
        this._id = id ?? node_crypto_1.default.randomUUID();
    }
    get id() {
        return this._id;
    }
    toJSON() {
        return {
            id: this.id,
            ...this._props
        };
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base-entity.js.map