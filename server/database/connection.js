const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  process.env.RDS_DB,
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD,
  {
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: "mysql",
    dialectOptions: {
      ssl: "Amazon RDS",
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: "en",
  }
);
