const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'categorias';

// esquema de la base de datos ---------------------
const CategoriaSchema = {
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
};

// modelo de la base de datos ---------------------
class Categoria extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Categoria',
      timestamps: false,
    };
  }
}

// exportamos los datos
module.exports = { USER_TABLE, CategoriaSchema, Categoria};
// exportamos la tabla, el esquema y el modelo
