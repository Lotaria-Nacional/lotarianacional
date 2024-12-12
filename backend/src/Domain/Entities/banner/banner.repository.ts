import { Banner } from "./banner"

export interface IBannerRespository {
  save(banner: Banner): Promise<void>
  getAll(): Promise<Banner[]>
  getById(id: string): Promise<Banner | null>
  update(id: string, data: Partial<Banner>): Promise<void>
  delete(id: string): Promise<void>
}
