function greet(name){
    console.log("Hello", name)
}
greet("Rian")

function sum(a, b){
    return a+b
}
console.log(sum(67, 2))

let greetBack = name => console.log("Hey there", name)
greetBack("Fahim")

let sayHi = function(name){
    console.log("Hi", name)
}
sayHi("Ratul")

function operateNumbers(a, b, operation){
    console.log(operation(a,b))
}
function sub(a, b){
    return a-b
}
let sumResult = operateNumbers(5, 5, sum)
let subResult = operateNumbers(5, 5, sub)