// const bankAccount = {
//     balance : 1000,
//     deposit(ammount){
//         this.balance += ammount
//         console.log(`Deposted ${ammount}, to the account , new ballance is ${this.balance}`) 
//     },
//     withdrawal(ammount){
//         if(this.balance < ammount){
//             console.log("Insufficient Ammount !")
//         }else{
//             console.log(`Ammount withdrawal ${ammount} and new ballance is ${this.balance-ammount}`)
//         }
//     }
// }
// bankAccount.deposit(500)
// bankAccount.withdrawal(1700)


const bankAccount = {
    balance : 1000,
    deposit(ammount){
        this.balance += ammount
        console.log(`Deposted ${ammount}, to the account , new ballance is ${this.balance}`) 
    },
    withdrawal(ammount){
        if(this.balance < ammount){
            console.log("Insufficient Ammount !")
        }else{
            console.log(`Ammount withdrawal ${ammount} and new ballance is ${this.balance-ammount}`)
        }
    }
}
bankAccount.deposit(500)
bankAccount.withdrawal(1700)
