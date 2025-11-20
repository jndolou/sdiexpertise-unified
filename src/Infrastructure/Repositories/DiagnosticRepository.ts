import { IDiagnosticRepository } from '../../Domain/Repositories';
import { Diagnostic } from '../../Domain/Models';
import { diagnosticsMock } from '../Data/Mocks';

export class DiagnosticRepository implements IDiagnosticRepository {
  async getAll(): Promise<Diagnostic[]> {
    return Promise.resolve(diagnosticsMock);
  }

  async getById(id: string): Promise<Diagnostic | null> {
    const diagnostic = diagnosticsMock.find((d, index) => index.toString() === id);
    return Promise.resolve(diagnostic || null);
  }

  async getFeatured(): Promise<Diagnostic[]> {
    return Promise.resolve(diagnosticsMock.slice(0, 6));
  }
}
