const http = require('http');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.write(req.url)             // for utilizing the browser
    res.setHeader = {'content-Type' : 'text/plain'};
    res.end(`Hello server running in local host ${port}`);
})

server.listen(port,host,()=>{
    console.log(`server listening in ${host} : ${port}`);
}
);