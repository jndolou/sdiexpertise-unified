import { IArticleRepository } from '../Domain/Repositories';
import { Article } from '../Domain/Models';

export class GetArticleById {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(id: string | number): Promise<Article | null> {
    return await this.articleRepository.getById(id);
  }
}
