let age = 22
let status = (age >= 18) ? "Adult" : "Underage"
console.log(status)

let x = ['a', 'b', 'c', 'd', 'e']
let y = [...x]
console.log(y)

let z = ['f', 'g', 'h']
let combinedArray = [...x, ...z]
console.log(combinedArray)

let newArray = [...combinedArray, 'i']
console.log(newArray)

function sum(a, b, c){
    return a+b+c
}

let numbers = [1, 2, 3]
let result = sum(...numbers)
console.log(result)

function total(...numbers){
    let total = 0
    for(let number of numbers){
        total += number
    }
    return total
}
result = total(1, 2, 3, 4, 5)
console.log(result)