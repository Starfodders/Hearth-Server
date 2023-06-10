require('dotenv').config();

module.exports = {
  client: 'mysql2',
  connection: {
    host: 'hearth.c39yrrmgaxm6.us-east-2.rds.amazonaws.com',
    database: process.env.DB_RDS_DBNAME,
    port: process.env.DB_RDS_PORT,
    user: process.env.DB_RDS_USER,
    password: process.env.DB_RDS_PASSWORD
  },
};

// module.exports = {
//   client: 'mysql2',
//   connection: {
//     host: '127.0.0.1',
//     database: process.env.DB_LOCAL_DBNAME,
//     user: process.env.DB_LOCAL_USER,
//     password: process.env.DB_LOCAL_PASSWORD
//   },
// };

