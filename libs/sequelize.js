const { Sequelize } = require('sequelize');

// Configuración de la base de datos
const { config } = require('../config/config.js');
// Configuración de los modelos de la base de datos
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mssql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Instanciamos el constructor de Sequelize
const sequelize = new Sequelize(URI, {
  dialect: 'mssql', // Cambiamos 'mysql' a 'mssql'
  dialectOptions: {
    options: {
      encrypt: true, // Si estás utilizando una conexión segura, activa el cifrado
    },
  },
  logging: true,
});

setupModels(sequelize);
// Sincronizamos la base de datos
sequelize.sync();

module.exports = sequelize;
