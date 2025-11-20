import { Article } from '../Models';

export interface IArticleRepository {
  getAll(): Promise<Article[]>;
  getById(id: string | number): Promise<Article | null>;
  getFeatured(): Promise<Article[]>;
}
