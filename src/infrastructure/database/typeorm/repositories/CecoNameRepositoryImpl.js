import { CecoName } from '../../../../domain/entities/CecoName.js';
export class CecoNameRepositoryImpl {
    constructor(pool) {
        this.pool = pool;
    }

    async findAll() {
        const result = await this.pool.request().query('SELECT Id,Cecocode, Name, State,CreatedBy,CreatedAt,UpdatedBy,UpdateAt FROM dbo.CecoName');
        
        // Mapeo de la respuesta
        
       return result.recordset.map(row => new CecoName({
        Id: row.Id,
        Cecocode: row.Cecocode,
        Name: row.Name,
        State: row.State,
        CreatedBy: row.CreatedBy,
        CreatedAt: row.CreatedAt,
        UpdatedBy: row.UpdatedBy,
        UpdateAt: row.UpdateAt
        }));

   

    }
    async findById(id) {
        const result = await this.pool.request().query(`SELECT Id,Cecocode, Name, State,CreatedBy,CreatedAt,UpdatedBy,UpdateAt FROM dbo.CecoName WHERE Id = ${id}`);
        if (result.recordset.length === 0) return null //Validación de existencia del registro 
        const row = result.recordset[0];
        return new CecoName({Id: row.Id,Cecocode: row.Cecocode, Name: row.Name, State: row.State,CreatedBy: row.CreatedBy,CreatedAt: row.CreatedAt,UpdatedBy: row.UpdatedBy,UpdateAt: row.UpdateAt})
    }   
}