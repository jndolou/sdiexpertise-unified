import { IDiagnosticRepository } from '../Domain/Repositories';
import { Diagnostic } from '../Domain/Models';

export class GetDiagnosticById {
  constructor(private diagnosticRepository: IDiagnosticRepository) {}

  async execute(id: string): Promise<Diagnostic | null> {
    return await this.diagnosticRepository.getById(id);
  }
}
