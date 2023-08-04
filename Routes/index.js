// aqui va el manejo de las rutas
const express = require('express');
// aqui se define las rutas
const categoriasRouter = require('./categorias.router'); //categorias
const productosRouter = require('./productos.router'); //productos

// funcion principal
function routesApi(app) {
  // versionado de la api
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  // aqui se define las rutas
  routerV1.use('/categorias', categoriasRouter);
  routerV1.use('/productos', productosRouter);
}

module.exports = routesApi; // exportamos las rutas
