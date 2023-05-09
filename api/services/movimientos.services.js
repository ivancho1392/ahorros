const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class MoveService {
  constructor() {}

  async create(data) {
    const newMove = await models.Move.create(data);
    return newMove;
  }

  async find() {
    const rta = await models.Move.findAll();
    return rta;
  }

  async findOne(id) {
    const move = await models.Move.findByPk(id);
    if (!move){
      throw boom.notFound('movement not found');
    }
    return move;
  }

  async update(id, changes) {
    const move = await this.findOne(id);
    const rta = await move.update(changes);
    return rta;
  }

  async delete(id) {
    const move = await this.findOne(id);
    await move.destroy();
    return { id };
  }
}

module.exports = MoveService;
