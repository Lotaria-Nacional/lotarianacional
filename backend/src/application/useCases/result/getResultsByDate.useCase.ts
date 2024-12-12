import { IResultRepository } from "../../../domain/entities/result/result.respository"

export class GetResultsByDateUseCase {
  constructor(private resultRespository: IResultRepository) {}
  async execute() {
    const today = new Date().toISOString()
  }
}
