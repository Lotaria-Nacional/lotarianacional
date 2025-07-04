
export type FileFolder = "lotaria_nacional/users" | "lotaria_nacional/news" | "lotaria_nacional/banners" | "lotaria_nacional/statistcs";
export type FileUploadOpts = {
  file:Buffer
  fileName:string
  folder?:FileFolder
}

export interface IFileUpload {
  upload(props:FileUploadOpts): Promise<string>;
  delete(publicId: string): Promise<void>;
}
