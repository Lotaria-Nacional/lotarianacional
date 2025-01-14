import { Banner, BannerProps } from "./banner";

export interface IBannerRespository {
  save(banner: Banner): Promise<void>;
  delete(id: string): Promise<void>;
  getAll(): Promise<Banner[]>;
  getById(id: string): Promise<Banner>;
  update(id: string, newBanner: Banner): Promise<void>;
}
