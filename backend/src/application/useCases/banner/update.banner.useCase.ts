// import { Banner } from "../../../Domain/Entities/banner/banner";
// import { NotFoundError } from "../../../shared/errors/notFound.error";
// import { getCloudinaryPublicId } from "../../../utils/get.cloudinaryPublicId";
// import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface";
// import { IBannerRespository } from "../../../Domain/Entities/banner/banner.repository";

// type UpdateBannerInputDTO = {
//   id: string;
//   desk_banner_1?: string | Buffer;
//   desk_banner_2?: string | Buffer;
//   desk_banner_3?: string | Buffer;
//   mob_banner_1?: string | Buffer;
//   mob_banner_2?: string | Buffer;
//   mob_banner_3?: string | Buffer;
// };

// export class UpdateBannerUseCase {
//   constructor(private bannerRepository: IBannerRespository, private uploadFileService: IFileUpload) {}

//   async execute(data: UpdateBannerInputDTO) {
//     // Verifica se o banner existe
//     const existingBanner = await this.bannerRepository.getById(data.id);
//     if (!existingBanner) throw new NotFoundError("Banner não encontrado.");

//     // Atualiza as imagens, se necessário
//     // const desk_banner_1 = await this.updateImage(
//     //   data.desk_banner_1,
//     //   existingBanner.desk_banner_1 as string
//     // )
//     // const desk_banner_2 = await this.updateImage(
//     //   data.desk_banner_2,
//     //   existingBanner.desk_banner_2 as string
//     // )
//     // const desk_banner_3 = await this.updateImage(
//     //   data.desk_banner_3,
//     //   existingBanner.desk_banner_3 as string
//     // )
//     // const mob_banner_1 = await this.updateImage(
//     //   data.mob_banner_1,
//     //   existingBanner.mob_banner_1 as string
//     // )
//     // const mob_banner_2 = await this.updateImage(
//     //   data.mob_banner_2,
//     //   existingBanner.mob_banner_2 as string
//     // )
//     // const mob_banner_3 = await this.updateImage(
//     //   data.mob_banner_3,
//     //   existingBanner.mob_banner_3 as string
//     // )

//     // // Atualiza os dados no repositório
//     // const updatedBanner = Banner.create({
//     //   id: existingBanner.id,
//     //   desk_banner_1: desk_banner_1 || existingBanner.desk_banner_1,
//     //   desk_banner_2: desk_banner_2 || existingBanner.desk_banner_2,
//     //   desk_banner_3: desk_banner_3 || existingBanner.desk_banner_3,
//     //   mob_banner_1: mob_banner_1 || existingBanner.mob_banner_1,
//     //   mob_banner_2: mob_banner_2 || existingBanner.mob_banner_2,
//     //   mob_banner_3: mob_banner_3 || existingBanner.mob_banner_3,
//     // })

//     await this.bannerRepository.update(data.id, updatedBanner);

//     return updatedBanner;
//   }

//   private async updateImage(file: string | Buffer | undefined, existingFile: string): Promise<string | undefined> {
//     if (file) {
//       const publicId = getCloudinaryPublicId(existingFile);

//       if (publicId) {
//         await this.uploadFileService.delete(publicId);
//       }

//       const newImageURL = await this.uploadFileService.upload(file, "lotaria_nacional/banners");
//       return newImageURL;
//     }

//     // Se nenhum arquivo foi enviado, retorna undefined
//     return undefined;
//   }
// }
