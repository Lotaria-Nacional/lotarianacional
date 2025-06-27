
export type CloudinaryFolder = "lotaria_nacional/users" | "lotaria_nacional/news" | "lotaria_nacional/banners" | "lotaria_nacional/statistcs";

export type CloudinaryResourceOption = "image" | "video" | "raw" | undefined;

export interface IFileUpload {
  upload(file: string | Buffer, folder: CloudinaryFolder, type: CloudinaryResourceOption): Promise<string>;
  delete(publicId: string, type: CloudinaryResourceOption): Promise<void>;
}
