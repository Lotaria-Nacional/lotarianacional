"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryUploadService = void 0;
const cloudinary_1 = require("../../config/cloudinary");
class CloudinaryUploadService {
    async upload(file, folder) {
        return new Promise((resolve, reject) => {
            cloudinary_1.cloudinary.uploader
                .upload_stream({ folder }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result?.secure_url || "");
            })
                .end(file);
        });
    }
    async delete(publicId) {
        try {
            await cloudinary_1.cloudinary.uploader.destroy(publicId);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CloudinaryUploadService = CloudinaryUploadService;
