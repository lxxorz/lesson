let cloneDeep = function(o){
    let res;
    if(Array.isArray(o)){
        res = [];
        for(v of o){
            res.push(o)
        }
    }else if(o === null) {
        res = null
    }else if(o instanceof Object){
        res = {}
        for([k, v] of Object.entries(o)){
            res[k] = cloneDeep(v);
        }
    }else{
        res = o;
    }
    return res;
}

let user = {
    name: 'lxx',
    age: 23,
    salary: '200',
    desc: {
        work: 'front end engineer',
        jk: 'true',
    },
    fuck: null
}
let  res = cloneDeep(user);
console.log(res);