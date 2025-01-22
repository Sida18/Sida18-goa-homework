let http = require('http')

let fs = require('fs')

const css = fs.readFileSync('/style.css')
let html = fs.readFileSync('/index.html')
let server = http.createServer((req,res) => {
    if(req.url === '/') {
         res.writeHead(200, {'content-type': 'text/html'})
         res.write(html)
         res.end()
    }

    else if (req.url === '/style.css') {
        res.writeHead(200,  {'content-type':'text/css'})
        res.write(css)
        res.end()
    }

    
})

server.listen(5000)