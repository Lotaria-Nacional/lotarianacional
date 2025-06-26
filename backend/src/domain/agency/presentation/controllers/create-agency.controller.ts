import { z } from "zod";
import { CreateAgencyUseCase } from "../../application/use-cases/create-agency.useCase";
import { HttpRequest, HttpResponse, IController } from "../../../../core/infrastucture/http/controller";

export class CreateAgencyController implements IController {
  constructor(private createAgencyUseCase: CreateAgencyUseCase) {}

  async handle(req: HttpRequest):Promise<HttpResponse> {

    const createAgencySchema = z.object({
      name: z.string().min(1, "O nome da agência é obrigatório."),
      phone: z.number().int(),
      location_text: z.string().min(1, "A localização da agência é obrigatória."),
      latitude: z.number(),
      longitude: z.number(),
      type: z.enum(["lotaria-nacional", "elephant-bet", "arreiou"], { errorMap: () => ({ message: "O tipo da agência é obrigatório." }) }),
    }); 
    try {
      const agencyData = createAgencySchema.parse(req.body);

      await this.createAgencyUseCase.execute(agencyData);

      return {
        statusCode:201,
        body:{ message: "Criado com sucesso." }
      }
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return {
          statusCode:400,
          body:{ message: error.errors[0].message }
        }
      }
      return {
        statusCode:500,
        body:{ message: error.message }
      }
    }
  }
}
