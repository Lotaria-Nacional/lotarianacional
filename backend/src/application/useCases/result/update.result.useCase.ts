import { Result } from "../../../Domain/Entities/Result/Result";
import { NotFoundError } from "../../../shared/errors/notFound.error";
import { IResultRepository } from "../../../Domain/Entities/Result/result.respository";

type UpdateResultInputDTO = {
  id: string;
  name?: string;
  hour?: string;
  number_1?: number;
  number_2?: number;
  number_3?: number;
  number_4?: number;
  number_5?: number;
  videoURL?: string;
};

export class UpdateResultUseCase {
  constructor(private resultRepository: IResultRepository) {}

  async execute(data: UpdateResultInputDTO): Promise<Result> {
    const result = await this.resultRepository.getById(data.id);
    if (!result) throw new NotFoundError("Resultado não encontrado.");

    result.update(data);
    this.resultRepository.update(data);
    return result;
  }
}
