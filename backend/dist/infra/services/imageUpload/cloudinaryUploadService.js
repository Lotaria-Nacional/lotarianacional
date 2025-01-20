"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryUploadService = void 0;
const cloudinary_1 = require("../../Config/cloudinary");
class CloudinaryUploadService {
    async upload(file, folder) {
        return new Promise((resolve, reject) => {
            if (typeof file === "string" && file.endsWith(".zip")) {
                return reject(new Error("Arquivos ZIP não são suportados"));
            }
            cloudinary_1.cloudinary.uploader
                .upload_stream({
                folder,
                resource_type: "raw",
            }, (error, result) => {
                if (error) {
                    console.log("Erro ao fazer upload do arquivo no cloudinary");
                    return reject(error);
                }
                resolve(result?.secure_url || "");
            })
                .end(file);
        });
    }
    async delete(publicId) {
        try {
            const result = await cloudinary_1.cloudinary.uploader.destroy(publicId, {
                resource_type: "raw",
            });
            if (result.result === "ok") {
                console.log("Ficheiro deletado com sucesso.");
            }
            else {
                console.log("Erro ao tentar deletar o ficheiro. Resposta do Cloudinary:", result);
            }
        }
        catch (error) {
            console.log("Erro ao deletar o arquivo no Cloudinary: ", error);
            throw error;
        }
    }
}
exports.CloudinaryUploadService = CloudinaryUploadService;
