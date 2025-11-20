import { IExpertiseRepository } from '../../Domain/Repositories';
import { Expertise } from '../../Domain/Models';
import { expertisesMock } from '../Data/Mocks';

export class ExpertiseRepository implements IExpertiseRepository {
  async getAll(): Promise<Expertise[]> {
    return Promise.resolve(expertisesMock);
  }
}
