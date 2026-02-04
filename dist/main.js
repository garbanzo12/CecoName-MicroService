import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { poolPromise } from './infrastructure/database/typeorm/mssql-pool.js';
import { CompanyRepositoryImpl } from './infrastructure/database/typeorm/repositories/CompanyRepositoryImpl.js';
import { GetCompanies } from './application/use-cases/GetCompanies.js';
const app = express();
app.use(express.json());
const pool = await poolPromise;
const repo = new CompanyRepositoryImpl(pool);
const getCompaniesUseCase = new GetCompanies(repo);
app.get('/companies', async (req, res) => {
  try {
    const companies = await getCompaniesUseCase.execute();
    res.json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Error obteniendo compañías'
    });
  }
});
app.listen(3001, () => {
  console.log('🚀 Microservicio de Compañías (ODBC Nativo) en puerto 3001');
});