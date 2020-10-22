class MyPromise{
    static Reject ="Reject"
    static Resolve = "Resolve"
    static Pending = "Pending"
    static status = Pending
    constructor(callback) {
        if( callback && typeof callback == "function"){
            callback(this.resolve.bind(this), this.reject.bind(this));
        }else{
            new Error("lack of a callback or callback is not function")
        }
    }
    reject(){
        if(this.status === MyPromise.Pending){
            this.status = MyPromise.Reject;
        }
    }
    resolve(){

    }
}