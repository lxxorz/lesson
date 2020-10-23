let fucker1 = {
    sayHi () { console.log('hello lxxorz') }
} 

let fucker2 = { };

//普通版本
fucker1.sayHi && fucker1.sayHi()
fucker2.sayHi && fucker2.sayHi()

//可选链
fucker1.sayHi?.();
fucker2.sayHi?.();
