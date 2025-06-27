import { z } from "zod";
import { NotFoundError } from "@/core/errors/notFound.error";
import { UpdateAgencyUseCase } from "../../application/use-cases/update-agency.useCase";
import { IController, HttpRequest, HttpResponse } from "@/core/infrastucture/http/controller";

export class UpdateAgencyController implements IController{
  constructor(private useCase: UpdateAgencyUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {
    const { id } = req.params;

    const updateAgencySchema = z.object({
      name: z.string().optional(),
      phone: z.number().optional(),
      location_text: z.string().optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      type: z.enum(["lotaria-nacional", "elephant-bet", "arreiou"], { errorMap: () => ({ message: "O tipo da agência é obrigatório." }) }).optional(),
    });

    try {
      const data = updateAgencySchema.parse(req.body);
      const updatedAgency = await this.useCase.execute(id, data);
      
      return {
        statusCode:200,
        body:{ message: "Atualizado com sucesso.", data: updatedAgency }
      }
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          statusCode:404,
          body:{ message: error.message }
        }
      }
      return {
        statusCode:500,
        body:{ message: "Erro interno no servidor." }
      }
    }
  }
}
