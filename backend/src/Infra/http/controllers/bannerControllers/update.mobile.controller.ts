// import { z } from "zod"
// import { Request, Response } from "express"
// // import { UpdateBannerUseCase } from "../../../../application/useCases/banner/update.banner.useCase"

// export class UpdateMobileBannersController {
//   constructor(private updateBannerUseCase: UpdateBannerUseCase) {}

//   async handle(req: Request, res: Response) {
//     const idSchema = z.object({
//       id: z.string(),
//     })

//     try {
//       const { id } = idSchema.parse(req.params)
//       const files = req.files as Express.Multer.File[]

//       await this.updateBannerUseCase.execute({
//         id,
//         mob_banner_1: files.at(0)?.buffer || undefined,
//         mob_banner_2: files.at(1)?.buffer || undefined,
//         mob_banner_3: files.at(2)?.buffer || undefined,
//       })

//       return res.status(201).json({ message: "Atualizado com sucesso." })
//     } catch (error: any) {
//       return res.status(500).json({ error: error, message: error.message })
//     }
//   }
// }
