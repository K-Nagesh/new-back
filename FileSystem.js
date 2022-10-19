const http = require('http');
const host = 'localhost';
const port = 5000;
const fs = require('fs')

// //another method

// const {promisify} = require('util');
// const append = promisify(fs.appendFile);
// const user="K-Nagesh";

const server = http.createServer((req,res)=>{

        //syntax for all systems
        fs.readFile('fileName', "Requireddata", (err,data) =>{
                res.write(data)
                res.end()
            })

    //readFile System

    fs.readFile('createNew', (err,data) =>{
        res.write(data)
        res.end()
    })

    //appendFile for overWriteFile system

    fs.appendFile('createNew',"overWriteFile", (err,data) => {
        res.write(data)
        res.end()
    })

    //another method

    (async () => {
        try{
                const modify = await append('createNew',`\n mygit credentials are stored ${user}`)
                console.log('successfully stored');
        } catch (err) {
                console.log('error');
        }
})()

    //writeFile System

    fs.writeFile('createNew',"create or Replaced", (err,data) => {
        res.write(data)
        res.end()
    })

    //delete the file

    fs.unlink('createNew',(err,data) => {
        if (err) throw err
        console.log('file deleted');
    })

    // res.write(req.url)             // for utilizing the browser
    // res.setHeader = {'content-Type' : 'text/html'};
    // res.end(`<h1>Hello server running in local host ${port}<h1>`);
})

server.listen(port,host,()=>{
    console.log(`server listening in ${host} : ${port}`);
});