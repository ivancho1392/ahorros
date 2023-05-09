const Joi = require('joi');

const id = Joi.number().integer();
const general = Joi.number().integer();
const medico = Joi.number().integer();
const mascotas = Joi.number().integer();
const carro = Joi.number().integer();
const ocio = Joi.number().integer();
const imprevistos = Joi.number().integer();
const descripcion = Joi.string().min(3).max(30);
const tipo = Joi.string().min(3).max(8);
const fecha = Joi.string().min(3).max(8);

const createMoveSchema = Joi.object({
  general: general.required(),
  medico: medico.required(),
  mascotas: mascotas.required(),
  carro: carro.required(),
  ocio: ocio.required(),
  imprevistos: imprevistos.required(),
  descripcion: descripcion.required(),
  tipo: tipo.required(),
  fecha: fecha.required(),
});

const updatePartialMoveSchema = Joi.object({
  general: general,
  medico: medico,
  mascotas: mascotas,
  carro: carro,
  ocio: ocio,
  imprevistos: imprevistos,
  descripcion: descripcion,
  tipo: tipo.required(),
  fecha: fecha,
});

const updateMoveSchema = Joi.object({
  general: general.required(),
  medico: medico.required(),
  mascotas: mascotas.required(),
  carro: carro.required(),
  ocio: ocio.required(),
  imprevistos: imprevistos.required(),
  descripcion: descripcion.required(),
  tipo: tipo.required(),
  fecha: fecha.required(),
});

const getMoveSchema = Joi.object({
  id: id.required(),
});

module.exports = { createMoveSchema, updatePartialMoveSchema, updateMoveSchema, getMoveSchema };
