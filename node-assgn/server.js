var http = require("http");
var server = http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('This is an empty message');
    response.end();

});

server.listen(3000);