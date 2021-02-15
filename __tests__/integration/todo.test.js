const request = require('supertest');
const server = require('../../src/index');

describe('/todo', () => {
  it('should return todos', async () => {
    const response = await
      request(server)
        .get('/todo');

    expect(response.statusCode).toBe(200);
    expect(response.body.todos).toEqual([])
  });

  it('should create todo', async () => {
    const response = await
      request(server)
        .post('/todo')
        .send({
          id: "1e1ccb76-368c-4c47-8023-375796dad9fc",
          task: "write unit test",
          done: false
        })

    expect(response.body.todo).toEqual({
      id: "1e1ccb76-368c-4c47-8023-375796dad9fc",
      task: "write unit test",
      done: false
    })
    expect(response.body.success).toEqual(true)
    expect(response.statusCode).toBe(200);
  });

  it('should return error when invalid request send to create endpoint', async () => {
    const response = await
      request(server)
        .post('/todo')
        .send({
          id: "1",
          task: "write unit test",
          done: false
        })

    expect(response.statusCode).toBe(400);
  });

  it('should return todos after create todo endpoint is triggered', async () => {
    const response = await
      request(server)
        .get('/todo');

    expect(response.statusCode).toBe(200);
    expect(response.body.todos).toEqual([
      {
        id: "1e1ccb76-368c-4c47-8023-375796dad9fc",
        task: "write unit test",
        done: false
      }
    ])
  });

  it('should return error when invalid request send to update endpoint', async () => {
    const response = await
      request(server)
        .put('/todo/1');

    expect(response.statusCode).toBe(400);
  });

  it('should return success false when non existing id send to update endpoint', async () => {
    const response = await
      request(server)
        .put('/todo/1e1ccb76-368c-4c47-8023-375796dad9fd');

    expect(response.body.success).toEqual(false);
  });

  it('should update todo done field value', async () => {
    const response = await
      request(server)
        .put('/todo/1e1ccb76-368c-4c47-8023-375796dad9fc');

    expect(response.statusCode).toBe(200);
    expect(response.body.todo).toEqual({
        id: "1e1ccb76-368c-4c47-8023-375796dad9fc",
        task: "write unit test",
        done: true
      });
    expect(response.body.success).toEqual(true);
  });

  it('should return error when invalid request send to delete endpoint', async () => {
    const response = await
      request(server)
        .delete('/todo/1');

    expect(response.statusCode).toBe(400);
  });


  it('should return success false when non existing id send to delete endpoint', async () => {
    const response = await
      request(server)
        .delete('/todo/1e1ccb76-368c-4c47-8023-375796dad9fd');

    expect(response.body.success).toEqual(false);
  });

  it('should remove todo with given id', async () => {
    const response = await
      request(server)
        .delete('/todo/1e1ccb76-368c-4c47-8023-375796dad9fc');

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toEqual(true);
  });

  it('should return empty todos array after remove todo endpoint is triggered', async () => {
    const response = await
      request(server)
        .get('/todo');

    expect(response.statusCode).toBe(200);
    expect(response.body.todos).toEqual([])
  });
});
