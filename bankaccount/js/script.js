const $ = (selector) => document.querySelector(selector)

const bankAccount = function(ownerName) {

    let balance = 1500
    let owner = ownerName

    return {
        deposit(depositAmount){
            while (depositAmount <= 0 || isNaN(depositAmount)) {
                depositAmount = Number(prompt('The deposit amount must be a valid positive number'))}
            balance = balance + depositAmount
        },
        withdrawal(withdrawalAmount){
            while(withdrawalAmount <= 0 || isNaN(withdrawalAmount)){
                withdrawalAmount = Number(prompt('The withdrawal amount must be a valid positive number'))
                    }
            balance = balance - withdrawalAmount
        },
        getOwnerName(){
            return owner
        },
        getBalance(){
            return balance
        }
    }
}

$('#name').addEventListener('click',()=>{
    let ownerName = prompt('Please enter your name')
    const newBankAccount = bankAccount(ownerName)

    $('#deposit').addEventListener('click', ()=> {
        const depositAmount = Number(prompt('Please enter an amount for deposit'))
        newBankAccount.deposit(depositAmount)
        $('div').textContent = `${newBankAccount.getOwnerName()}, your new account balance is ${newBankAccount.getBalance()}.`
    })

    $('#withdrawal').addEventListener('click', ()=>{
        const withdrawalAmount = Number(prompt('Please enter an amount to withdraw'))
        newBankAccount.withdrawal(withdrawalAmount)
        $('div').textContent = `${newBankAccount.getOwnerName()}, your new account balance is ${newBankAccount.getBalance()}.`
    })

})


