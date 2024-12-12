"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgencyController = void 0;
const zod_1 = require("zod");
class CreateAgencyController {
    constructor(createAgencyUseCase) {
        this.createAgencyUseCase = createAgencyUseCase;
    }
    async handle(req, res) {
        const createAgencySchema = zod_1.z.object({
            name: zod_1.z.string().min(1, "O nome da agência é obrigatório."),
            phone: zod_1.z.number().int(),
            location_text: zod_1.z
                .string()
                .min(1, "A localização da agência é obrigatória."),
            latitude: zod_1.z.number().int(),
            longitude: zod_1.z.number().int(),
        });
        try {
            const agencyData = createAgencySchema.parse(req.body);
            await this.createAgencyUseCase.execute(agencyData);
            return res.status(201).json({ message: "Criado com sucesso." });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                return res.status(400).json({ message: error.errors[0].message });
            }
            return res.status(500).json(error.message);
        }
    }
}
exports.CreateAgencyController = CreateAgencyController;
