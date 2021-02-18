# Todo Service

It handles todo CRUD operation and request from todo frontend app.

## Features

- Return all todos GET /todo
- Create a new todo POST /todo
- Update todo with done-undone PUT /todo/:id
- Delete todo DELETE /todo/:id
- Return status of service GET /health

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
You can test [http://localhost:8080/health] with Postman.

### `npm test`

Run all test cases.

## Dockerize Application

Docker builds the image by using `node:14` to build.

### `docker build -t {$CONTAINER_NAME} .`

Builds the docker image by the `CONTAINER_NAME`.

### `docker run -p {$PORT}:8080 {$CONTAINER_NAME}`

Runs the built docker image, links the `PORT` to exposed port `8080`. The service is reachable at http://localhost:{$PORT}.

## Pipeline Automation

`Travis-ci` is used as Pipeline Automation tool and configured in the file `.travis.yml`.

It works for every commit and automates the steps:

- installs npm dependencies
- runs tests
- builds the application
- builds docker image
- pushes the docker image to docker hub
