export function whatsMyType<T>(argument:T) : T{

    return argument
}


let amIString = whatsMyType<string>('Hello World');
let amINumber = whatsMyType<number>(123456);
let amIArray = whatsMyType<number[]>([1,2,3,4,5,6,8]);

console.log(amIString.split(' '))
console.log(amIArray.join(" "))
console.log(amINumber.toFixed())