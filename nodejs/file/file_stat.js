const fs = require('fs')
fs.stat('./hello.txt', (err, stat) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(`is file: ${stat.isFile()}`);
    console.log(`is directory: ${stat.isDirectory()}`);
    console.log(`is symbolic link: ${stat.isSymbolicLink()}`);
    console.log(`file size: ${stat.size}Byte`);
})
