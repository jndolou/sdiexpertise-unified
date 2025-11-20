import { IArticleRepository } from '../Domain/Repositories';
import { Article } from '../Domain/Models';

export class GetFeaturedArticles {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(): Promise<Article[]> {
    return await this.articleRepository.getFeatured();
  }
}
