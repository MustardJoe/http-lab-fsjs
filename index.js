const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log(req.method);
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('hi');
});

server.listen(9999, () => {
  console.log('listening on port 9999');
});