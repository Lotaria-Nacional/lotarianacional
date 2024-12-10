type CloudinaryFolder = "lotaria_nacional/users" | "lotaria_nacional/news"

export interface IFileUpload {
  upload(file: string | Buffer, folder: CloudinaryFolder): Promise<string>
  delete(publicId: string): Promise<void>
}
