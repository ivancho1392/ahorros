const express = require('express');

const movimientosRouter = require('./movimientos.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/movimientos', movimientosRouter);
}

module.exports = routerApi;
