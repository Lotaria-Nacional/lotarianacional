type CloudinaryFolder =
  | "lotaria_nacional/users"
  | "lotaria_nacional/news"
  | "lotaria_nacional/banners"

export interface IFileUpload {
  upload(file: string | Buffer, folder: CloudinaryFolder): Promise<string>
  delete(publicId: string): Promise<void>
}
