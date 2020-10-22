const https = require("https");
const { url } = require("inspector");


const url = "localhost:3000"
const option = {
    hostname: url,
    port: 443,
    path: '/',
    method: 'POST',
    
}

const req = https.request(option, res => {
    console.log(`status code : ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error);
})

req.end();