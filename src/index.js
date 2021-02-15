const http = require('http');
const service = require('./server/server');
const log = require('./utils/logger');

const server = http.createServer(service);

if (process.env.NODE_ENV !== 'test')
  server.listen(process.env.PORT || 8080, (err) => {
    if (err) throw err
    log.info('Server is listening requests.');
  })

module.exports = server;
