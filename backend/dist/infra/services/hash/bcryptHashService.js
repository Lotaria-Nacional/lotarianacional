"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHashService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptHashService {
    async compare(password, hash) {
        return bcrypt_1.default.compareSync(password, hash);
    }
    async hash(password) {
        return bcrypt_1.default.hashSync(password, 10);
    }
}
exports.BcryptHashService = BcryptHashService;
