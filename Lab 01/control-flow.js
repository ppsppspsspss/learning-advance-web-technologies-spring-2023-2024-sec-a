let age = 16
let status

if(age >= 18){
    console.log("Adult")
}
else if(age >= 13){
    console.log("Teenager")
}
else{
    console.log("Underage")
}

switch (true) {
    case age >= 18:
        status = "Adult"
        break;
    case age >= 13:
        status = "Teenager"
        break;
    default:
        status = "Underage"
}
console.log(status)

let x = ['a', 'b', 'c', 'd', 'e']
let i = 0
let j = 0

for(let i = 0; i < 3; i++){
    console.log(x[i])
}

while(i<4){
    console.log(x[i])
    i++
}

do{
    console.log(x[j])
    j++
}while(j<2)

for(let i in x){
    console.log(x[i])
}

for(let i of x){
    console.log(i)
}