let getToken = function () {
    return Math.random().toString(15).substring(2, 15);
}

let ajax = function ( url,type = 'get', param = {}) {
    console.log(`send ajax request: ${type} ${url} ${param.name} ${param.token}`);
        //ajax请求
}

ajax = ajax.before(function ( url, type='get', param = {}) {
    // console.log('token: ', getToken());
    param.token = getToken();
})

