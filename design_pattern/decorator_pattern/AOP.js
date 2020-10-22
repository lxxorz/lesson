 Function.prototype.before = function( beforefn ) {
    let _self = this;
    return function() {
        if(!(beforefn instanceof Function)) {
            throw TypeError('beforefn is not a function');
        }
        beforefn.apply(this, arguments);
        //指定原函数并返回函数的执行效果
        //保证this不会被劫持
        return _self.apply(this, arguments);
    }
}

Function.prototype.after = function( afterfn ) {
    let _self = this;
    return function() {
        let res = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return res;
    }
}

//改写before函数，使得当beforefn返回值为false时，停止执行_self
let before = function(fn , beforefn) {
    return function() {
        let res = beforefn.apply(this, arguments);
        if(!res) return res;
        return fn.apply(this, arguments);
    }
}