const Stream = require('stream')
// //创建可读流
// const readableStream = new Stream.Readable()

// //实现read method
// readableStream._read = () => {console.log('_read');}
//第二种方法实现 read
const readableStream = new Stream.Readable({
    read(){}
})

readableStream.push('hi')
readableStream.push('monther fucker')
console.log(readableStream);