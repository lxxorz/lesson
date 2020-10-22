const Stream = require('stream')

const readableStream = Stream.Readable({
    read(){}
})

const writableStream = Stream.Writable({
    write(chunk, encoding, next){
        console.log(chunk.toString());
        next();
    }
})

//通过可写流消费可读流中的数据
readableStream.pipe(writableStream);
readableStream.push('hi!')
readableStream.push('ho')


// 监听readable事件消费可读流
readableStream.on('readable', () => {
    console.log("readable: ");
    console.log(readableStream.read());
})


// 发送数据到可写流
writableStream.write('hey\n')
