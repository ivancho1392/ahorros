const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVE_TABLE = 'movimientos';

const MoveSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  general: {
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: false,
  },
  medico: {
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: false,
  },
  mascotas: {
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: false,
  },
  carro: {
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: false,
  },
  ocio: {
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: false,
  },
  imprevistos: {
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: false,
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  total: {
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: false,
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  fecha: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Move extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVE_TABLE,
      modelName: 'Move',
      timestamps: false,
    };
  }
}

module.exports = { MOVE_TABLE, MoveSchema, Model, Move };
