import { Banner, BannerProps } from "./banner";

export interface IBannerRespository {
  save(banner: Banner): Promise<void>;
  getAll(): Promise<Banner[]>;
  getFirst(): Promise<Banner | null>;
  getById(id: string): Promise<Banner | null>;
  update(id: string, data: Partial<BannerProps>): Promise<void>;
  delete(id: string): Promise<void>;
}
