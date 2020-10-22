let a = function() {
    console.log('primitive function'); 
}

let _a = a;
a = function() {
    _a();
    console.log('additional function');
}



a();