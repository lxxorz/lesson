const str_buf = Buffer.from("做点事情")

let buf = Buffer.alloc(1024)
buf.write("做点事情")
console.log(buf);

let buf_unsafe = Buffer.allocUnsafe(1024)
buf.copy(buf_unsafe)
console.log(buf_unsafe);

