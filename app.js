const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello World - Version 2.0");
    res.end();
});

server.listen(3000, '0.0.0.0', () => {
    console.log("Server running");
});
