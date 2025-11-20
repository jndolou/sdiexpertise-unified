import { IArticleRepository } from '../../Domain/Repositories';
import { Article } from '../../Domain/Models';
import { articlesMock } from '../Data/Mocks';

export class ArticleRepository implements IArticleRepository {
  async getAll(): Promise<Article[]> {
    return Promise.resolve(articlesMock);
  }

  async getById(id: string | number): Promise<Article | null> {
    const article = articlesMock.find(a => a.id === id || a.id?.toString() === id.toString());
    return Promise.resolve(article || null);
  }

  async getFeatured(): Promise<Article[]> {
    return Promise.resolve(articlesMock.slice(0, 3));
  }
}
