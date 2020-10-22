const fs = require('fs')
const path = require('path')

const folder = './test'

try {
    if(!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }else{
        console.log("folder has existed");
    }
} catch (error) {
    console.log(error);
}


const currentFolder = './'
let filenames = fs.readdirSync(currentFolder).map(filename => {
    return path.join(currentFolder, filename)
})
filenames.forEach((v,k) => {
    fs.stat(v, (err, stat) => {
        if(err) {
            console.log(err);
            return
        }
        console.log(`${v} => ${stat.isFile()}`);
    })
})