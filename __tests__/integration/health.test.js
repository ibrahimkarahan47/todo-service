const express = require('express');
const request = require('supertest');
const healthController = require('../../src/controllers/health');

const app = express();
let server;
let agent;

beforeEach((done) => {
  app.use('/health', healthController);
  server = app.listen(8080, (err) => {
    if (err) return done(err);

    agent = request.agent(server);
    done();
  });
});

afterEach((done) => server && server.close(done));

describe('GET /health', () => {
  it('should return services status and timeStamp', async () => {
    const response = await
    request(server)
      .get('/health');

    expect(response.body.status).toBe('OK');
    expect(response.statusCode).toBe(200);
  });
});
