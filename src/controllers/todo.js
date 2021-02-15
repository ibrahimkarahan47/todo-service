const express = require('express');
const router = express.Router();
const log = require('../utils/logger');
const {
  validateCreateTodoRequest,
  validateRemoveTodoRequest,
  validateUpdateTodoRequest,
} = require('../utils/request-check');
const {
  getTodos,
  createTodo,
  updateTodo,
  removeTodo,
} = require('../services/todo');

router.get('/', (request, respond) => {
  log.info('GET /todo triggered.');
  respond.status(200).send(getTodos());
});

router.post('/', (request, respond) => {
  log.info('POST /todo triggered.');
  const validation = validateCreateTodoRequest({ body: request.body });
  if(validation.error){
    log.error('POST /todo validation error occurred.');
    respond.status(400).send(validation.error.details);
    return;
  }

  respond.status(200).send(createTodo({todo: request.body}));
});

router.delete('/:id', (request, respond) => {
  log.info('DELETE /todo triggered.');
  const validation = validateRemoveTodoRequest({ id: request.params.id });
  if(validation.error){
    log.error('DELETE /todo validation error occurred.');
    respond.status(400).send(validation.error.details);
    return;
  }

  respond.status(200).send(removeTodo({id: request.params.id}));
});

router.put('/:id', (request, respond) => {
  log.info('PUT /todo triggered.');
  const validation = validateUpdateTodoRequest({ id: request.params.id });
  if(validation.error){
    log.error('PUT /todo validation error occurred.');
    respond.status(400).send(validation.error.details);
    return;
  }

  respond.status(200).send(updateTodo({id: request.params.id}));
});

module.exports = router;
