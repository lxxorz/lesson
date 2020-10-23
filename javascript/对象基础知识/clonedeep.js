function cloneDeep(o){
    let res;
    if(Array.isArray(o)){
        res = new Array();
        for(v of o){
            res.push(v);
        }
    }
    else if(o == null){
        res = null
    }
    else if(typeof o == 'object'){
        res = new Object();
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
    age: 33,
    'house': null,
    work: {
        'salary': 1000,
        time: 'eight hours'
    },
    jobdescripe: 'front end engineer'
}
let arr = new Array(10).fill(0).map((v,k)=>k); 
let basic_type = 'hello world'
let res = cloneDeep(user)

console.log(res);
console.log(JSON.parse(JSON.stringify(user)));