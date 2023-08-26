function add(x,y){
    return x+y
}

function divide(x,y){
    return x/y
}

function compute(callBack, x, y){
    return callBack(x,y)
}

console.log(compute(add, 10, 5))    // 2
console.log(compute(divide, 10, 5))