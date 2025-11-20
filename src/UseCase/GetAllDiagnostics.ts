import { IDiagnosticRepository } from '../Domain/Repositories';
import { Diagnostic } from '../Domain/Models';

export class GetAllDiagnostics {
  constructor(private diagnosticRepository: IDiagnosticRepository) {}

  async execute(): Promise<Diagnostic[]> {
    return await this.diagnosticRepository.getAll();
  }
}
