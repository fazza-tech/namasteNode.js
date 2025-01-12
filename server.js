//node js have module call "http"

const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === "/getSecret"){
        res.end("There is no secret")
    }
    res.end("Hello world")
})

server.listen(3000,()=>{
    console.log('server is running');
})
//waiting for a req