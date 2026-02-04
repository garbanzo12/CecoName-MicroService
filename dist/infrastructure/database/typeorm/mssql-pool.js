import sql from 'mssql/msnodesqlv8.js';
import dotenv from 'dotenv';
dotenv.config();
const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  connectionString: `Driver={ODBC Driver 18 for SQL Server};Server=${process.env.DB_SERVER};Database=${process.env.DB_DATABASE};Trusted_Connection=yes;Encrypt=yes;TrustServerCertificate=yes;`,
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  }
};
export const poolPromise = new sql.ConnectionPool(config).connect().then(pool => {
  console.log('✅ Conectado a SQL Server (vía ODBC Nativo)');
  return pool;
}).catch(err => {
  console.error('❌ Error creando el pool de mssql:', err);
  process.exit(1);
});