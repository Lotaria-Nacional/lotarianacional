import axios from "@/lib/axios"
import { BannerEntity } from "../@types/banner.types"


export const getBanners = async (): Promise<BannerEntity[] | []> => {
  const result = await axios.get("/banner")
  return result.data
}
