const express = require('express');
const request = require('supertest');
const getTodosController = require('../../src/controllers/getTodos');

const app = express();
let server;
let agent;

beforeEach((done) => {
  app.use('/todos', getTodosController);
  server = app.listen(8080, (err) => {
    if (err) return done(err);

    agent = request.agent(server);
    done();
  });
});

afterEach((done) => server && server.close(done));

describe('GET /todos', () => {
  it('should return todos', async () => {
    const response = await
      request(server)
        .get('/todos');

    expect(response.statusCode).toBe(200);
  });
});
