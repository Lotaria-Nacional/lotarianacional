import { imagekit } from "../../../main/config/imagekit";
import { FileUploadOpts, IFileUpload } from "../../contracts/file-upload.interface";

export class ImagekitService implements IFileUpload {
    
    async upload(props: FileUploadOpts): Promise<string> {
        const img = await imagekit.upload({file:props.file.toString("base64"), fileName:"", folder:props.folder})
        const fileId = img.fileId
        return fileId
    }

    async delete(publicId: string): Promise<void> {

    }
}