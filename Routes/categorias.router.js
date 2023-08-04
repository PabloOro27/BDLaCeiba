// estilo de las rutas basicas de express
const express = require('express');
const router = express.Router();
// ----------------------------------------------
// para validacion de datos utilizamos el middleware de express-validator
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCategoriaSchema,
  updateCategoriaSchema,
  getCategoriaSchema,
} = require('../Schemas/categoria.schema'); // importamos el schema de validacion
// ----------------------------------------------
// servicios de la api
const categoriaService = require('../Service/categoria.service');
// creamos una instancia del servicio de la api
const service = new categoriaService();
// --------------------RUTAS--------------------------
// CRUDs
// GET ALL - traemos todos los datos
router.get('/', async (req, res, next) => {
  const categorias = await service.find(); // obtenemos los productos del servicio
  // respondemos con un json con los productos de la base de datos
  res.status(200).json(categorias);
});
// GET ONE - traemos un dato
router.get(
  '/:id',
  validatorHandler(getCategoriaSchema, 'params'), // validamos los datos de entrada
  async (req, res, next) => {
    // comrpobamos su existe la categoria
    try {
      const { id } = req.params;
      const idIntenger = parseInt(id);
      const categorias = await service.findOne(idIntenger); // obtenemos la categoria del servicio
      // respondemos con un json con los productos de la base de datos
      res.status(200).json(categorias);
    } catch (error) {
      next(error); // llamamos al middleware de errores con el error
    }
  }
);
// POST - creamos un dato
router.post(
  '/',
  validatorHandler(createCategoriaSchema, 'body'), // validamos los datos de entrada
  async (req, res, next) => {
    // comprobamos si existe la categoria
    try {
      const body = req.body;
      const newCategoria = await service.create(body); // creamos la categoria en el servicio
      // respondemos con un json con los productos de la base de datos
      res.status(201).json(newCategoria);
    } catch (error) {
      next(error); // llamamos al middleware de errores con el error
    }
  }
);
// PATCH - actualizamos un dato
router.patch(
  '/:id',
  validatorHandler(getCategoriaSchema, 'params'), // validamos los datos de entrada
  validatorHandler(updateCategoriaSchema, 'body'), // validamos los datos de entrada
  async (req, res, next) => {
    // comprobamos si existe la categoria
    try {
      const { id } = req.params;
      const body = req.body;
      const idIntenger = parseInt(id);
      const categoria = await service.update(idIntenger, body); // actualizamos la categoria en el servicio
      // respondemos con un json con los productos de la base de datos
      res.status(200).json(categoria);
    } catch (error) {
      next(error); // llamamos al middleware de errores con el error
    }
  }
);
// DELETE - eliminamos un dato
router.delete(
  '/:id',
  validatorHandler(getCategoriaSchema, 'params'), // validamos los datos de entrada
  async (req, res, next) => {
    // comprobamos si existe la categoria
    try {
      const { id } = req.params;
      const idIntenger = parseInt(id);
      await service.delete(idIntenger); // eliminamos la categoria en el servicio
      // respondemos con un json con los productos de la base de datos
      res.status(201).json({
        message: 'categoria deleted',
        id: idIntenger,
      });
    } catch (error) {
      next(error); // llamamos al middleware de errores con el error
    }
  }
);

module.exports = router; // exportamos el router
