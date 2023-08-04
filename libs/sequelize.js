const { Sequelize } = require('sequelize');

// configuracion de la base de datos
const { config } = require('../config/config.js');
// configuracion de los modelos de la base de datos
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// instanciamos el constructor de sequelize
const sequelize = new Sequelize(URI,{
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);
// sincronizamos la base de datos
sequelize.sync();

module.exports = sequelize;
