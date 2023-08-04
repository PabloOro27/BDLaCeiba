// configuracion de la base de datos para migracion
// traemos las configuraciones de la base de datos
const { config } = require('../config/config.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql',
    // logging: false,
  },
  production: {
    url: URI,
    dialect: 'mysql',
    // logging: false,
  },
  test: {
    url: URI,
    dialect: 'mysql',
    // logging: false,
  },
};
