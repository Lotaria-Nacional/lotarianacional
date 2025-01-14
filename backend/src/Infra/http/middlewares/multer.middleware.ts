import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const uploadBannerFile = upload.fields([{ name: "desk_1", maxCount: 1 }]);
