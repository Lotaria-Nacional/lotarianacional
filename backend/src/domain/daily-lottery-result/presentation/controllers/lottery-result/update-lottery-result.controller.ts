import { z } from "zod";
import { UpdateLotteryResultUseCase } from "../../../application/use-cases/lottery-result/update-lottery-result.useCase";
import { NotFoundError } from "../../../../../core/errors/common/not-found.error";
import { IController, HttpRequest, HttpResponse } from "../../../../../core/infrastucture/http/controller";

export class UpdateLotteryResultController implements IController {
  constructor(private useCase: UpdateLotteryResultUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const resultIdSchema = z.string();
    const updateResultSchema = z.object({
      videoURL: z.string().optional(),
    });

    try {
      const id = resultIdSchema.parse(req.params.id);
      const data = updateResultSchema.parse(req.body);

      const updated = {
        id,
        videoURL: data.videoURL,
      };
      const result = await this.useCase.execute(updated);

      return { statusCode: 200, body: { message: "Atualizado com sucesso.", data: result } };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return { statusCode: 404, body: { message: error.message } };
      }
      return { statusCode: 500, body: { message: "Erro interno no servidor." } };
    }
  }
}
