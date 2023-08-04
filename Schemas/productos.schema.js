// esquema de validacion de productos
const Joi = require('joi');

// definimos los datos y su tipo
const id = Joi.number().integer();
const nombre = Joi.string().max(100);
const descripcion = Joi.string().max(255);
const fechaIngreso = Joi.date();
const fechaVencimiento = Joi.date();
const proveedor = Joi.string().max(100);
const nitProveedor = Joi.number().integer();
const cantidad = Joi.number().integer();
const precioCosto = Joi.number().integer();
const precioVenta = Joi.number().integer();
const existencia = Joi.number().integer();

// validacion de create
const createProductoSchema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.required(),
  fechaIngreso: fechaIngreso,
  fechaVencimiento: fechaVencimiento.required(),
  proveedor: proveedor.required(),
  nitProveedor: nitProveedor.required(),
  cantidad: cantidad.required(),
  precioCosto: precioCosto.required(),
  precioVenta: precioVenta.required(),
  existencia: existencia,
});
// validacion de update
const updateProductoSchema = Joi.object({
  nombre: nombre,
  descripcion: descripcion,
  fechaIngreso: fechaIngreso,
  fechaVencimiento: fechaVencimiento,
  proveedor: proveedor,
  nitProveedor: nitProveedor,
  cantidad: cantidad,
  precioCosto: precioCosto,
  precioVenta: precioVenta,
  existencia: existencia,
});
// validacion de get
const getProductoSchema = Joi.object({
  id: id.required(), //el required es para que sea obligatorio el id
});

module.exports = {
  createProductoSchema,
  updateProductoSchema,
  getProductoSchema,
};
