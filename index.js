const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log(req.method);
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    body {
      background-color: pink;
    }
  </style>
</head>
<body>
  <h1>here the world ends with raptors and reptilicus</h1>
  
</body>
</html>
  `);
});

server.listen(9999, () => {
  console.log('listening on port 9999');
});
