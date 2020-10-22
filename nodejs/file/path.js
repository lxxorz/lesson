const path = require('path')

const filename = "/users/include/lib.txt"
path.dirname(filename)
console.log(path.dirname(filename));
console.log(path.basename(filename));
console.log(path.extname(filename));
console.log(path.basename(filename, path.extname(filename)));

let res = path.join('/', 'home', 'bjorn', 'video', 'fuck.rmvb');
console.log(res);


// console.log(path.resolve('hello.txt'));
console.log(path.normalize(''));