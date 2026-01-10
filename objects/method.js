const car = {
     brand : "TATA",
     model : "SUV",
     year : 2000,
    start(){
        console.log(`${this.brand}, ${this.model} is starting....`)
    },
    info(){
        return (`Brand : ${this.brand}, Model : ${this.model}, Year : ${this.year}`)
    }
}

for(let i=0 ; i<2 ; i++){
    console.log("")
}


car.start()
console.log(car.info())
// console.log(car.year)


for(let i=0 ; i<2 ; i++){
    console.log("")
}