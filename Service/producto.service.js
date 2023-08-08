const boom = require('@hapi/boom');
// importamos el modelo de la base de datos
const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');

// clase para el servicio de los productos
class productoService {
  // constructor de la clase
  constructor() {}
  // ----------------------------------------------
  // CRUDs- tienen que ser asincronos
  //  create - creamos un nuevo producto----------------------------------------------
  async create(data) {
    const newProducto = await models.Producto.create(data);
    return newProducto;
  }
  // read - leemos un producto----------------------------------------------
  // readAll - leemos todos los productos
  async find() {
    const productos = await models.Producto.findAll();
    return productos;
  }
  // ReadOne - leemos un producto
  async findOne(id) {
    const producto = await models.Producto.findByPk(id);
    if (!producto) {
      throw boom.notFound('producto not found');
    }
    return producto;
  }
  // update - actualizamos un producto----------------------------------------------
  async update(id, changes) {
    const producto = await models.Producto.findByPk(id);
    if (!producto) {
      throw boom.notFound('producto not found');
    }
    const updatedProducto = await producto.update(changes);
    return updatedProducto;
  }
  // delete - eliminamos un producto----------------------------------------------
  async delete(id) {
    const producto = await models.Producto.findByPk(id);
    if (!producto) {
      throw boom.notFound('producto not found');
    }
    await producto.destroy();
    return { message: 'producto deleted' };
  }
  // eliminar un producto de la tabla productos_categorias----------------------------------------------
  // deleteWithCategories - eliminamos un producto y sus filas relacionadas en productos_categorias
  async deleteWithCategories(id) {
    // Buscar el producto por su id
    const producto = await models.Producto.findByPk(id);
    if (!producto) {
      throw boom.notFound('producto not found');
    } else {
      // Eliminar las filas relacionadas en productos_categorias
      await models.ProductosCategorias.destroy({
        where: {
          productos_id: id,
        },
      });

      // Eliminar el producto
      await producto.destroy();

      return { message: 'producto and its related categories deleted' };
    }

  }
  // ------------------------------------------------------------------------------
  async findCategory() {
    const query = `
    SELECT productos.nombre, GROUP_CONCAT(categorias.nombre) AS categorias
    FROM  productos
	  INNER JOIN productos_categorias
		  ON productos.id = productos_categorias.productos_id
	  INNER JOIN categorias
		  ON categorias.id = productos_categorias.categorias_id
    GROUP BY productos.id;`;
    const [data] = await sequelize.query(query);
    return data;
  }
}

module.exports = productoService;
