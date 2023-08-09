// Traemos las configuraciones de la base de datos
const { config } = require('../config/config.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mssql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mssql', // Cambiamos 'mysql' a 'mssql'
    dialectOptions: {
      options: {
        encrypt: true, // Si estás utilizando una conexión segura, activa el cifrado
      },
    },
    // logging: false,
  },
  production: {
    url: URI,
    dialect: 'mssql', // Cambiamos 'mysql' a 'mssql'
    dialectOptions: {
      options: {
        encrypt: true, // Si estás utilizando una conexión segura, activa el cifrado
      },
    },
    // logging: false,
  },
  test: {
    url: URI,
    dialect: 'mssql', // Cambiamos 'mysql' a 'mssql'
    dialectOptions: {
      options: {
        encrypt: true, // Si estás utilizando una conexión segura, activa el cifrado
      },
    },
    // logging: false,
  },
  loggin: console.log,
};
