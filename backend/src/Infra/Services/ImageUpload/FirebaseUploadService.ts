import { firebase } from "../../Config/firebase"
import { CloudinaryResourceOption, IFileUpload } from "../../../Domain/services/fileUpload.service.interface"

export class FirebaseUploadService implements IFileUpload {
  async upload(file: string, folder: string, type:CloudinaryResourceOption): Promise<string> {
    console.log("Chegou no Firebase Service")
    return new Promise((resolve, reject) => {
      if (typeof file === "string" && file.endsWith(".zip")) {
        return reject(new Error("Arquivos ZIP não são suportados"))
      }
      firebase.uploader
        .upload_stream(
          {
            folder,
            resource_type: type,
          },
          (error, result) => {
            if (error) {
              console.log("Erro ao fazer upload do arquivo no cloudinary")
              return reject(error)
            }
            resolve(result?.secure_url || "")
          }
        )
        .end(file)
    })
  }
  async delete(publicId: string): Promise<void> {
    try {
      const result = await firebase.uploader.destroy(publicId, {
        resource_type: "raw", 
      })
      if (result.result === "ok") {
        console.log("Ficheiro deletado com sucesso.")
      } else {
        console.log(
          "Erro ao tentar deletar o ficheiro. Resposta do Cloudinary:",
          result
        )
      }
    } catch (error) {
      console.log("Erro ao deletar o arquivo no Cloudinary: ", error)
      throw error
    }
  }
}
