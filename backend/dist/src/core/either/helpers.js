"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = void 0;
const left_1 = require("./left");
const right_1 = require("./right");
const left = (value) => {
    return new left_1.Left(value);
};
exports.left = left;
const right = (value) => {
    return new right_1.Right(value);
};
exports.right = right;
//# sourceMappingURL=helpers.js.map