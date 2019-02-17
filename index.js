const os = require('os');
const http = require('http');
const requestHandler = (req, res) => {
    console.log('Request incoming from ' + req.connection.remoteAddress);
    res.writeHead(200);
    res.end('Version V2 ! le hostname est ' + os.hostname() + ' avec pour OS ' + os.platform() + '!');
};
const server = http.createServer(requestHandler)
server.listen(3000);
