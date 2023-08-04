// aqui se maneja los servicios de la api
const boom = require('@hapi/boom'); // importamos boom
// importamos el modelo de la base de datos
const { models } = require('../libs/sequelize');

// clase para el servicio de la api
class categoriaService {
  // constructor de la clase
  constructor() {}
  // ----------------------------------------------
  // CRUDs- tienen que ser asincronos
  // create - creamos un nuevo producto----------------------------------------------
  async create(data) {
    const newCategoria = await models.Categoria.create(data);
    return newCategoria;
  }
  // read - leemos un producto----------------------------------------------
  // readAll - leemos todos los productos
  async find() {
    const categorias = await models.Categoria.findAll();
    return categorias;
  }
  // ReadOne - leemos un producto
  async findOne(id) {
    const categoria = await models.Categoria.findByPk(id);
    if (!categoria) {
      throw boom.notFound('categoria not found');
    }
    return categoria;
  }
  // update - actualizamos un producto----------------------------------------------
  async update(id, changes) {
    const categoria = await models.Categoria.findByPk(id);
    if (!categoria) {
      throw boom.notFound('categoria not found');
    }
    const updatedCategoria = await categoria.update(changes);
    return updatedCategoria;
  }
  // delete - eliminamos un producto----------------------------------------------
  async delete(id) {
    const categoria = await models.Categoria.findByPk(id);
    if (!categoria) {
      throw boom.notFound('categoria not found');
    }
    await categoria.destroy();
    return { message: 'categoria deleted' };
  }
}

module.exports = categoriaService; // exportamos el servicio
