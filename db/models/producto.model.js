const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'productos';

// esquema de la base de datos ---------------------
const ProductoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fechaIngreso: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  fechaVencimiento: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  proveedor: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nitProveedor: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  precioCosto: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  precioVenta: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  existencia: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

// modelo de la base de datos ---------------------
class Producto extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Producto',
      timestamps: false,
    };
  }
}

// exportamos los datos
module.exports = { USER_TABLE, ProductoSchema, Producto };
// exportamos la tabla, el esquema y el modelo
