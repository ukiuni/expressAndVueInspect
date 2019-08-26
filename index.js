const http = require("http");
const server = http.createServer();

server.on('request', (req, res)=>{
    res.write("originalUrl "+JSON.stringify(req));
    res.end();
});


server.listen(3003);