import sql from 'mssql/msnodesqlv8.js';
import dotenv from 'dotenv';
import { config } from '../../../shared/config/index.js';
dotenv.config();

//Conexion a la bd mediante las variables del archivo index.js de la carpeta config
const dbconfig = {
  server: config.database.server,
  database: config.database.name,
  connectionString: `Driver={ODBC Driver 18 for SQL Server};Server=${config.database.server};Database=${config.database.name};Trusted_Connection=yes;Encrypt=yes;TrustServerCertificate=yes;`,
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  }
};
export const poolPromise = new sql.ConnectionPool(dbconfig).connect().then(pool => {
  console.log('✅ Conectado a SQL Server (vía ODBC Nativo)');
  return pool;
}).catch(err => {
  console.error('❌ Error creando el pool de mssql:', err);
  process.exit(1);
});