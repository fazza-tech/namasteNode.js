//node js have module call "http"

const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("Hello world")
})

server.listen(3000)
//waiting for a req