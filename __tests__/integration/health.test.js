const request = require('supertest');
const server = require('../../src/index');

describe('/health', () => {
  it('should return services status and timeStamp', async () => {
    const response = await
    request(server)
      .get('/health');

    expect(response.body.status).toBe('OK');
    expect(response.statusCode).toBe(200);
  });
});

