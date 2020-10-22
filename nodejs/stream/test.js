let obj = {
    'age': 30,
    // nested_obj: {
    //     'fuck': 'bitch',
    // }
}


const key = 'fuck'

console.log(obj?.nested_obj?.[key]);