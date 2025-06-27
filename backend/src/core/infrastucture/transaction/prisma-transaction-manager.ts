import { UnitOfWork } from "./unit-of-work";
import { PrismaClient } from "@prisma/client";
import { ITransactionManager } from "../../contracts/transaction-manager.interface";

export class PrismaTransactionManager implements ITransactionManager {
    constructor(private prisma:PrismaClient){}

    async beginTransaction<T>(callback: (uow: UnitOfWork) => Promise<T>): Promise<T> {
        return await this.prisma.$transaction(async(tx)=>{
            const uow = new UnitOfWork(tx)
            return callback(uow)
        }, {
            timeout:7000
        })
    }
}