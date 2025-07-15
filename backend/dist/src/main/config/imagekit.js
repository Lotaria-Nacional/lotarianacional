"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagekit = void 0;
const imagekit_1 = __importDefault(require("imagekit"));
exports.imagekit = new imagekit_1.default({
    privateKey: '',
    publicKey: '',
    urlEndpoint: '',
    uploadEndpoint: ''
});
//# sourceMappingURL=imagekit.js.map