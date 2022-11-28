const http = require('http');
http.createServer((req, res) => {

    let bd = {
        codigo: 2530,
        producto: 'computadora',
        cantidad: 150
    }

    res.write(JSON.stringify(bd));
    res.end();

}).listen(8080);

console.log('Web server usando el puerto 8080');