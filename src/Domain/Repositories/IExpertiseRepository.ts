import { Expertise } from '../Models';

export interface IExpertiseRepository {
  getAll(): Promise<Expertise[]>;
}
