import multer from "multer"

const storage = multer.memoryStorage()
export const upload = multer({ storage })

export const uploadDeskFiles = upload.fields([
  { name: "desk_1", maxCount: 1 },
  { name: "desk_2", maxCount: 1 },
  { name: "desk_3", maxCount: 1 },
]);
export const uploadMobFiles = upload.fields([
  { name: "mob_1", maxCount: 1 },
  { name: "mob_2", maxCount: 1 },
  { name: "mob_3", maxCount: 1 },
]);