// ruta de los productos
const express = require('express');
const router = express.Router();
// ----------------------------------------------
// para validacion de datos utilizamos el middleware de express-validator
const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductoSchema,
  updateProductoSchema,
  getProductoSchema,
} = require('../Schemas/productos.schema'); // importamos el schema de validacion
// ----------------------------------------------
// servicios de la api
const productoService = require('../Service/producto.service');
const service = new productoService();
// --------------------RUTAS--------------------------
// GET ALL - traemos todos los datos
router.get('/', async (req, res, next) => {
  const productos = await service.find(); // obtenemos los productos del servicio
  // respondemos con un json con los productos de la base de datos
  res.status(200).json(productos);
});
// GET ONE - traemos un dato
router.get('/:id',
  validatorHandler(getProductoSchema, 'params'), // validamos los datos de entrada
  async (req, res, next) => {
  // comrpobamos su existe el producto
  try {
    const { id } = req.params;
    const idIntenger = parseInt(id);
    const producto = await service.findOne(idIntenger); // obtenemos el producto del servicio
    // respondemos con un json con los productos de la base de datos
    res.status(200).json(producto);
  } catch (error) {
    next(error); // llamamos al middleware de errores con el error
  }
});
// POST - creamos un dato
router.post('/',
  validatorHandler(createProductoSchema, 'body'), // validamos los datos de entrada
  async (req, res, next) => {
  // comprobamos si existe el producto
  try {
    const body = req.body;
    const newProducto = await service.create(body); // creamos el producto en el servicio
    // respondemos con un json con los productos de la base de datos
    res.status(201).json(newProducto);
  } catch (error) {
    next(error); // llamamos al middleware de errores con el error
  }
});
// PATCH - actualizamos un dato
router.patch('/:id',
  validatorHandler(getProductoSchema, 'params'), // validamos los datos de entrada
  validatorHandler(updateProductoSchema, 'body'), // validamos los datos de entrada
  async (req, res, next) => {
  // comprobamos si existe el producto
  try {
    const { id } = req.params;
    const body = req.body;
    const idIntenger = parseInt(id);
    const producto = await service.update(idIntenger, body); // actualizamos el producto en el servicio
    // respondemos con un json con los productos de la base de datos
    res.status(200).json(producto);
  } catch (error) {
    next(error); // llamamos al middleware de errores con el error
  }
});
// DELETE - eliminamos un dato
router.delete('/:id',
  validatorHandler(getProductoSchema, 'params'),
  async (req, res, next) => {
  // comprobamos si existe el producto
  try {
    const { id } = req.params;
    const idIntenger = parseInt(id);
    const producto = await service.delete(idIntenger); // eliminamos el producto en el servicio
    // respondemos con un json con los productos de la base de datos
    res.status(200).json(producto);
  } catch (error) {
    next(error); // llamamos al middleware de errores con el error
  }
});

// ----------------------------------------------
// productos con categorias
router.get('/:id/categorias',
validatorHandler(getProductoSchema, 'params'),
async (req, res, next) => {
  const respuesta = await service.findCategory();
  res.json(respuesta);
});

module.exports = router;
