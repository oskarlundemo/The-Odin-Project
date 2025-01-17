





const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let path = './';
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url)

    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if(err) {
            console.error(err)
            res.end();
        } else {
            res.end(data);
        }
    })
})



server.listen(3000, 'localhost', (err, res) => {
    console.log('Server is running on port 3000')
})