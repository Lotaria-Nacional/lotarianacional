"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagekitService = void 0;
const imagekit_1 = require("../../../main/config/imagekit");
class ImagekitService {
    async upload(props) {
        const img = await imagekit_1.imagekit.upload({ file: props.file.toString("base64"), fileName: "", folder: props.folder });
        const fileId = img.fileId;
        return fileId;
    }
    async delete(publicId) {
    }
}
exports.ImagekitService = ImagekitService;
//# sourceMappingURL=imagekit.service.js.map