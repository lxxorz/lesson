const fs = require('fs')
const content = `
void add(int a, int b) {
    return a + b;
}
`
fs.writeFile('./hello.txt', content, {flag: 'a+'}, err => {
    if(err) {
        console.log(err);
    }
    console.log('write successfully');
})