const Stream = require('stream')
writeableStream = Stream.Writable({
    write(chunk, encoding, next){
        console.log(chunk.toString());
        next()
    }
})
process.stdin.pipe(writeableStream)
