// aqui van los esquemas de validacion
const Joi = require('joi');

// definimos los datos y su tipo
const id = Joi.number().integer();
const nombre = Joi.string().max(100);
const descripcion = Joi.string().max(255);

// validacion de create
const createCategoriaSchema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.required(),
});
// validacion de update
const updateCategoriaSchema = Joi.object({
  nombre: nombre,
  descripcion: descripcion,
});
// validacion de get
const getCategoriaSchema = Joi.object({
  id: id.required(), //el required es para que sea obligatorio el id
});

// exportamos los esquemas
module.exports = {
  createCategoriaSchema,
  updateCategoriaSchema,
  getCategoriaSchema,
};
