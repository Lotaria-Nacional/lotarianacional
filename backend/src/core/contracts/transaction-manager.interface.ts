import { UnitOfWork } from "../infrastucture/transaction/unit-of-work";

export interface ITransactionManager {
    beginTransaction<T>(callback:(uow:UnitOfWork)=>Promise<T>):Promise<T>
}