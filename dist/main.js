import 'reflect-metadata';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();
import express from 'express';
import { poolPromise } from './infrastructure/database/typeorm/mssql-pool.js';
import { CecoNameRepositoryImpl } from './infrastructure/database/typeorm/repositories/CecoNameRepositoryImpl.js';
import { GetCecoNames } from './application/use-cases/GetCecoNames.js';
import { GetCecoNameById } from './application/use-cases//GetCecoNameById.js';
import { CecoNameController } from './infrastructure/http/controllers/CecoNameController.js';
const app = express();
app.use(express.json());
// app.use(morgan('dev')); <-- Usar morgan en caso de necesitar observar los tiempos de respuesta, en controllers ya se imprimen respuestas de petición
const pool = await poolPromise; // Conexion a la pool mssql  

const repo = new CecoNameRepositoryImpl(pool);
const getCecoNameUseCase = new GetCecoNames(repo);
const getCecoNameByIdUseCase = new GetCecoNameById(repo);
const CecoameController = new CecoNameController(getCecoNameUseCase, getCecoNameByIdUseCase);

//Endpoints de companies 
app.get('/ceconame', (req, res) => CecoameController.getAll(req, res));
app.get('/ceconame/:id', (req, res) => CecoameController.getById(req, res));
app.listen(3002, () => {
  console.log('🚀 Microservicio de Compañías (ODBC Nativo) en puerto 3002');
});