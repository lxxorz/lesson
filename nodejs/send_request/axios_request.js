const axios = require('axios')

const url = "http://localhost:3000"
axios
    .post(url, {
        todo: "做点事情"
    })
    .then(res => {
        // console.log(res);
    })
    .catch(error => {
        console.log(error);
    })