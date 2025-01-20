import { News } from "./News";

export type INewsResponse = {
  data: News[] | [];
  totalRecords: number;
  totalPages: number;
};

export interface INewsRespository {
  save(news: News): Promise<void>;
  getAll(page: number, pageSize: number): Promise<INewsResponse>;
  getById(id: string): Promise<News | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<News>): Promise<News>;
}
