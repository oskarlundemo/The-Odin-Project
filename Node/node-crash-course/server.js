


const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request made');

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello, World!' }));
});

server.listen(3000, 'localhost', (err, res) => {
    console.log('Listening for request')
})