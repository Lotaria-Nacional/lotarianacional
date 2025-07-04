import { imagekit } from "../../../main/config/imagekit";
import { CloudinaryResourceOption, FileFolder, IFileUpload } from "../../contracts/file-upload.interface";

export class ImagekitService implements IFileUpload {
    
    async upload(file: Buffer, folder: FileFolder, type?: CloudinaryResourceOption): Promise<string> {
        const img = await imagekit.upload({file:file.toString("base64"), fileName:"", folder})
        const fileId = img.fileId
        return fileId
    }

    async delete(publicId: string): Promise<void> {
        
    }
}