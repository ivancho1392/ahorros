const { Move, MoveSchema } = require('./move.model');

function setupModels(sequelize) {
  Move.init(MoveSchema, Move.config(sequelize));
}

module.exports = setupModels;
