const { Categoria, CategoriaSchema } = require('./categoria.model'); // importamos el modelo de usuario
const { Producto, ProductoSchema} = require('./producto.model')// importamos el modelo de productos
const {
  ProductosCategorias,
  ProductosCategoriasSchema,
} = require('./productoCategoria.model');// importamos el modelo de productos_categorias

// funcion para configurar los modelos
function setupModels(sequelize) {
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  ProductosCategorias.init(
    ProductosCategoriasSchema,
    ProductosCategorias.config(sequelize)
  );
}

// exportamos la funcion
module.exports = setupModels;
