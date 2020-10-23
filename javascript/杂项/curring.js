// function curry (f) {
//     return function (a) {
//         return function (b) {
//             return f(a, b)
//         }
//     }
// }

// //简单柯里化
// //特点参数个数固定
// let [a, b] = [1, 2]
// let add = function ( a , b ) {
//     return a + b;
// }
// let curry_add = curry(add);
// let res = curry_add(a)(b);
// // console.log(res);


//高级柯里化
{
    let sum = function(a, b, c) {
        return a + b + c;
    }
    let curry = function(fn){
        return function curried(...args) {
            if(args.length >= fn.length) {
                return fn.apply(this, args);
            }else {
                return function(...args2) {
                    return curried.apply(this, args.concat(args2))
                }
            }
        }
    }
    let s = curry(sum);
    console.log(`sum: ${s(1)(2)(3)}`);
    console.log(`sum: ${s(1)(2)}`);
    console.log(`sum: ${s(1, 2)(3)}`);
    //总结
    /*
    
    */
}