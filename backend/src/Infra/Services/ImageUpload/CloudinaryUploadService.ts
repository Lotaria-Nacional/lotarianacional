import { cloudinary } from "../../Config/cloudinary"
import { IFileUpload } from "../../../Domain/services/fileUpload.service.interface"

export class CloudinaryUploadService implements IFileUpload {
  async upload(file: string, folder: string): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder }, (error, result) => {
          if (error) return reject(error)
          resolve(result?.secure_url || "")
        })
        .end(file)
    })
  }
  async delete(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId)
    } catch (error) {
      console.log(error)
    }
  }
}
