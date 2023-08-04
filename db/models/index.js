const { Categoria, CategoriaSchema } = require('./categoria.model'); // importamos el modelo de usuario
const { Producto, ProductoSchema} = require('./producto.model')// importamos el modelo de productos

// funcion para configurar los modelos
function setupModels(sequelize) {
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
}

// exportamos la funcion
module.exports = setupModels;
