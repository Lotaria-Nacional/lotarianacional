"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTransactionManager = void 0;
const unit_of_work_1 = require("./unit-of-work");
class PrismaTransactionManager {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async beginTransaction(callback) {
        return await this.prisma.$transaction(async (tx) => {
            const uow = new unit_of_work_1.UnitOfWork(tx);
            return callback(uow);
        }, {
            timeout: 7000
        });
    }
}
exports.PrismaTransactionManager = PrismaTransactionManager;
//# sourceMappingURL=prisma-transaction-manager.js.map