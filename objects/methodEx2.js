const user = {
    firstName : "Ashutosh",
    lastName : "Kumar",
    
    fullName(){
        return this.firstName + " "+ this.lastName
    },

    setName(name){
        const parts = name.split(" ")
        this.firstName = parts[0]
        this.lastName = parts[1]
        console.log(`${this.firstName} and ${this.lastName}`)
    }
}

console.log(user.fullName())
user.setName("Jhon Cina")