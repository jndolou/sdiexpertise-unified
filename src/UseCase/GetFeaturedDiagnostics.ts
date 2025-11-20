import { IDiagnosticRepository } from '../Domain/Repositories';
import { Diagnostic } from '../Domain/Models';

export class GetFeaturedDiagnostics {
  constructor(private diagnosticRepository: IDiagnosticRepository) {}

  async execute(): Promise<Diagnostic[]> {
    return await this.diagnosticRepository.getFeatured();
  }
}
