import http from 'node:http'
const users:{id:number,name:string}[]=[]
console.log(users)

const server=http.createServer()

server.listen(3333,()=>{
    console.log("Server ins running on port:3333")
})

server.on('request',(req,res)=>{
    console.log("Hello World")
    res.writeHead(200,"Testando node").end("Hello world!")
})

