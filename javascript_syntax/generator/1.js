function *getEntry(obj) {
    let proper = Reflect.ownKeys(obj);
    for(let key of proper){
        yield [key, obj[key]];
    }
}

let obj = {
    name: "fuck",
    age:23,
    work: "bank",
    cost: "huage",
    weight: "150kg"
}


// for(let [key, value] of getEntry(obj)) {
//     console.log(`${key}: ${value}`);
// }