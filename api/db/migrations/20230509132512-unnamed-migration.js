'use strict';

const { MoveSchema, MOVE_TABLE } = require('./../models/move.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(MOVE_TABLE, MoveSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(MOVE_TABLE);
  }
};
