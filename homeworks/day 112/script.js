const http = require('http')


const server = http.createServer((req,res) =>{
    if(req.url === '/about'){
        res.end('hello mate how are u')
    }

    if(req.url === '/homepage'){
        res.end('<a herf = EgZjaHJvbWUqDwgBEC4YChjUAhixAxiABDIGCAAQRRg5Mg8IARAuGAoY1AIYsQMYgAQyDwgCEC4YChjUAhixAxiABDIJCAMQLhgKGIAEMg8IBBAuGAoYrwEYxwEYgAQyCQgFEAAYChiABDIJCAYQLhgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABNIBCTEzNDM3ajBqN6gCALACAA>helo</a>')
        
    }
})