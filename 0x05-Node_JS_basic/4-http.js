const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(1245);
