const fs = require('fs')
const http = require('http')

// const server = http.createServer(function(req, res) {
//     fs.readFile(__dirname + '/data.txt', (err, data) => {
//         res.end(data)
//     })
// })

const server = http.createServer(function(req, res){
    const stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(res);
})

server.listen(3000, () => {
    console.log(`listen on 3000 port`);
})