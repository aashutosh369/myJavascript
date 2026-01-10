function sayHello(name){
    console.log(`Hello, ${name}`)
}

function sayBye(name){
    console.log(`Goodbye, ${name}`)
}

let isLeaving = true
let name = "Alice"

isLeaving ? sayBye(name) : sayHello(name)

