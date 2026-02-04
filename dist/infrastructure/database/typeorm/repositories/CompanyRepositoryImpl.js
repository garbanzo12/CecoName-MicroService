import { Company } from '../../../../domain/entities/Company.js';
export class CompanyRepositoryImpl {
  constructor(pool) {
    this.pool = pool;
  }
  async findAll() {
    const result = await this.pool.request().query('SELECT Id, Name, State FROM dbo.Companies');

    // Mapeamos los resultados de la tabla a tu Entidad de Dominio
    return result.recordset.map(row => new Company({
      id: row.Id,
      name: row.Name,
      state: row.State
    }));
  }
}