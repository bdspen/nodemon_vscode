const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.listen(port, () => {
  console.log(`Simple Node.js server listening on port ${port}`);
  console.log('Try visiting http://localhost:${port} in your browser.');
  console.log('Make a change to this file to trigger nodemon restart.');
  console.log('Set a breakpoint in this file and use the debugger.');
}); 