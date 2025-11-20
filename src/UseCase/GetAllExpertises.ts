import { IExpertiseRepository } from '../Domain/Repositories';
import { Expertise } from '../Domain/Models';

export class GetAllExpertises {
  constructor(private expertiseRepository: IExpertiseRepository) {}

  async execute(): Promise<Expertise[]> {
    return await this.expertiseRepository.getAll();
  }
}
