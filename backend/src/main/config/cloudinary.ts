import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"
import { env } from "./env";

dotenv.config()

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUD_API_KEY,
  api_secret: env.CLOUD_SECRET,
});

export { cloudinary };