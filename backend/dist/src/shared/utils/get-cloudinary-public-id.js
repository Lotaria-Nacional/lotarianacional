"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudinaryPublicId = getCloudinaryPublicId;
function getCloudinaryPublicId(file) {
    if (!file || typeof file !== "string")
        return undefined;
    const segments = file.split("/");
    const lastSegment = segments.pop();
    const fileName = lastSegment?.split(".")[0];
    if (segments.length >= 2 && fileName) {
        const folderPath = segments.slice(-2).join("/");
        return `${folderPath}/${fileName}`;
    }
    return undefined;
}
//# sourceMappingURL=get-cloudinary-public-id.js.map