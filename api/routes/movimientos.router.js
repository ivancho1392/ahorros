const express = require('express');

const MoveService = require('./../services/movimientos.services');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createMoveSchema,
  updateMoveSchema,
  getMoveSchema,
  updatePartialMoveSchema,
} = require('./../schemas/move.schema');

const router = express.Router();
const service = new MoveService();

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getMoveSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.json(await service.findOne(id));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createMoveSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
validatorHandler(getMoveSchema, 'params'),
validatorHandler(updatePartialMoveSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id',
validatorHandler(getMoveSchema, 'params'),
validatorHandler(updateMoveSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json(await service.delete(id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
