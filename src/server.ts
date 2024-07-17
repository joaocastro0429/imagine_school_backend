import http from 'node:http'
import { Http2Stream } from 'node:http2'
const users: { id: number, name: string }[] = []
console.log(users)

http.createServer()

    .listen(4444, () => {
        console.log("Server ins running on port:3333")
    })

    .on('request', (req, res) => {
        console.log(req.method, req.url)

        if (req.method === 'GET' && req.url === '/users') {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(users))
            return
        }
        if (req.method === 'POST' && req.url === '/users') {
            users.push({ id: users.length + 1, name: "joao" })
            res.writeHead(201, 'user created', { 'Content-Type': 'application/json' })
            res.end()
            return
        }
        res.writeHead(404, "not found").end()

    })

function authMiddleware(req:http.IncomingMessage,res:http.ServerResponse){
    const auth=req.headers.authorization
    if(auth==='123456'){
        console.log('Authorized')
        return true
    }
    res.writeHead(401,'Unauthorized').end()
    
}



http.createServer()
    .listen(5555, () => console.log('Server is running on port 5555'))
    .on('request', (req, res) => {
        const { method, url } = req
        switch (url) {
            case '/users':
                switch (method) {
                    case 'GET':
                        res.writeHead(200, { 'Content-Type': 'application/json' })
                        res.end(JSON.stringify(users))
                        break
                    case 'POST':
                        users.push({ id: users.length + 1, name: 'joao' })
                        res.writeHead(201, 'User Created', { 'Content-Type': 'application/json' })
                        res.end()
                        break
                    default:
                        res.writeHead(501, 'Method not implemented').end()
                        break

                }
                break
            default:
                res.writeHead(404, 'Not found').end()
                break
        }

    })

    http.createServer()
    .listen(6666,()=>console.log('Server is running on port 6666'))

    .on('request',(req:any,res)=>{
        const {method,url}=req
        
        return res.writeHead(404).end()

    })

