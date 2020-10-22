const http = require('http')
const port = 3000;


const server = http.createServer((req, res) => {
    let data = []

    //data是流式传输
    req.on('data',chunk =>{
        console.log('可用数据块: ', chunk);
        data.push(chunk)
    })
    req.on('end', () => {
        console.log(JSON.parse(data).todo);
    })
    res.statusCode = 200;
    res.end("hello world")
})


server.listen(port, () => {
    console.log(`server port listen on ${port}`);
})