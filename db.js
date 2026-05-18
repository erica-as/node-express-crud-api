const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conexão com o SQL Server estabelecida com sucesso!');
    return pool;
  })
  .catch(err => {
    console.error('Falha na conexão com o SQL Server:', err);
    process.exit(1);
  });

module.exports = {
  sql, poolPromise,
};