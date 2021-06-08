const http = require('http');
const os = require('os');

console.log("Node server starting...");

var handler = function(request, response) {
  if (request.url === '/health') {
      response.writeHead(200);
      response.end("{version=1}");
      return;
  }

  var timestamp = new Date().getTime();
  console.log("Received request. RemoteAddress=" + request.connection.remoteAddress + " Time=" + timestamp);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + ". Time=" + timestamp + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
