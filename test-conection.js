// test-connection.js
import 'dotenv/config'
import sql from 'mssql/msnodesqlv8'

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  }
}

try {
  const pool = await sql.connect(config)
  console.log('✅ Conectado a SQL Server')
  await pool.close()
} catch (err) {
  console.error('❌ Error conexión:', err)
}