import { News } from "./News";

export interface INewsRespository {
  save(news: News): Promise<void>;
  getAll(): Promise<News[] | []>;
  getById(id: string): Promise<News | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<News>): Promise<News>;
}
