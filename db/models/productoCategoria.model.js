const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'productos_categorias';

// esquema de la base de datos ---------------------
const ProductosCategoriasSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  productos_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  categorias_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

// modelo de la base de datos ---------------------
class ProductosCategorias extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'ProductosCategorias',
      timestamps: false,
    };
  }
}

// exportamos los datos
module.exports = { USER_TABLE, ProductosCategoriasSchema, ProductosCategorias };
// exportamos la tabla, el esquema y el modelo
