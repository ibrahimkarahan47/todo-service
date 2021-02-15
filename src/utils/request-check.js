const Joi = require('joi');

const createTodoRequestSchema = {
  id: Joi.string().uuid().required(),
  task: Joi.string().required(),
  done: Joi.boolean().required(),
};

const removeTodoRequestSchema = {
  id: Joi.string().uuid().required(),
};

const updateTodoRequestSchema = {
  id: Joi.string().uuid().required(),
};

function validateCreateTodoRequest({ body }){
  return Joi.validate({
    id: body.id,
    task: body.task,
    done: body.done,
  },createTodoRequestSchema)
}

function validateRemoveTodoRequest({ id }){
  return Joi.validate({
    id,
  },removeTodoRequestSchema)
}

function validateUpdateTodoRequest({ id }){
  return Joi.validate({
    id,
  },updateTodoRequestSchema)
}

module.exports = {
  validateCreateTodoRequest,
  validateRemoveTodoRequest,
  validateUpdateTodoRequest,
};
