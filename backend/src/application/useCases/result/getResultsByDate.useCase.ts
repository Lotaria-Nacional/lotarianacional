import { IResultRepository } from "../../../Domain/Entities/Result/result.respository"

export class GetResultsByDateUseCase {
  constructor(private resultRespository: IResultRepository) {}
  async execute() {
    const today = new Date().toISOString()
  }
}
