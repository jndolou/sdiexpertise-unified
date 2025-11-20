import { IArticleRepository } from '../Domain/Repositories';
import { Article } from '../Domain/Models';

export class GetAllArticles {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(): Promise<Article[]> {
    return await this.articleRepository.getAll();
  }
}
