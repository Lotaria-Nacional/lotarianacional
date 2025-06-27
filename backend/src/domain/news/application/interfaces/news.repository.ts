import { News } from "../../enterprise/entities/news";

export type INewsResponse = {
  data: News[] | [];
  totalRecords: number;
  totalPages: number;
};

export interface INewsRespository {
  create(news: News): Promise<void>;
  save(data: Partial<News>): Promise<News>;
  getAll(page: number, pageSize: number): Promise<INewsResponse>;
  getById(id:string): Promise<News | null>;
  delete(id: string): Promise<void>;
}
