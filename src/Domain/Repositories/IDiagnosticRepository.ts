import { Diagnostic } from '../Models';

export interface IDiagnosticRepository {
  getAll(): Promise<Diagnostic[]>;
  getById(id: string): Promise<Diagnostic | null>;
  getFeatured(): Promise<Diagnostic[]>;
}
