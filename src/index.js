const http = require('http');
const service = require('./server/server');


const port = process.env.PORT || '8080';
service.set('port', port);

const server = http.createServer(service);

server.listen(port);

console.log(`Server is listening requests on ${port}`);

module.exports = server;
