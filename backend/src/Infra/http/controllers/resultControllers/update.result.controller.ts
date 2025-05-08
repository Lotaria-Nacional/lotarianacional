import { z } from "zod";
import { Request, Response } from "express";
import { NotFoundError } from "../../../../shared/errors/notFound.error";
import { UpdateResultUseCase } from "../../../../application/useCases/result/update.result.useCase";

export class UpdateResultController {
  constructor(private updateResultUseCase: UpdateResultUseCase) {}

  async handle(req: Request, res: Response) {
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
      const result = await this.updateResultUseCase.execute(updated);

      return res.status(200).json({ message: "Atualizado com sucesso.", data: result });
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno no servidor." });
    }
  }
}
