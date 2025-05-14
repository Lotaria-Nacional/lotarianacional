import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"

dotenv.config()


cloudinary.config({
  cloud_name: "db4rzfkyx",
  api_key: "734514299596973",
  api_secret: "SEPN1Ssot9hEXmFFNEeEzOGkTbU",
});

export { cloudinary };
