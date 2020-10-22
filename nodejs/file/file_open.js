const fs = require('fs')
fs.open('./hello.txt', 'r', (err, fd) => {
    console.log(fd);
})


try {
    const fd = fs.openSync('./hello.txt', 'r')
    console.log(fd);
} catch (error) {
    console.log(error);
}

