// income part 

function updateCalculateIncome(type, amount) {
    const typeInput = document.getElementById(type + '-input');
    const typeNumber = typeInput.value;
    typeInput.value = parseFloat(typeNumber);


    const typeTotal = document.getElementById(type + '-input');
    typeTotal.innerText = typeNumber;


    // calculate balance
    calculateBalance();


}



document.getElementById('calculate-btn').addEventListener('click', function () {

    updateCalculateIncome('income',);
    updateCalculateIncome('food',);
    updateCalculateIncome('rent',);
    updateCalculateIncome('other',);
});



function getTotalBalance(type) {
    const typeInput = document.getElementById(type + '-input');
    const typeNumber = parseFloat(typeInput.value);
    return typeNumber;
}



function calculateBalance() {
    const incomeBalance = getTotalBalance('income');
    const foodTotal = getTotalBalance('food');
    const rentTotal = getTotalBalance('rent');
    const otherTotal = getTotalBalance('other');
    const totalExpenses = foodTotal + rentTotal + otherTotal;
    const totalBalance = incomeBalance - totalExpenses;



    // update on the html

    document.getElementById('total-expeses').innerText = totalExpenses;
    document.getElementById('total-balance').innerText = totalBalance;


}


// saving part


document.getElementById('save-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeNumber = incomeInput.value;
    incomeInputTotal = parseFloat(incomeNumber);
    // incomeInput.value = '';


    const savingInput = document.getElementById('save-input');
    const savingNumber = savingInput.value;
    savingInputTotal = parseFloat(savingNumber);
    savingInput.value = '';


    // saving amount

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;
    savingAmountBalance = parseFloat(savingAmountText);
    // savingInput.value = '';
    savingAmount.innerText = incomeInputTotal * savingInputTotal / 100;


    const balanceAmount = document.getElementById('total-balance');
    const balanceAmountText = balanceAmount.innerText;
    balanceTotalAmount = parseFloat(balanceAmountText);



    // remaining balance

    const ramainingAmount = document.getElementById('remaining-amount');
    const remainingAmountText = ramainingAmount.innerText;
    remainingTotalAmount = parseFloat(remainingAmountText);
    // savingInput.value = '';
    ramainingAmount.innerText = balanceTotalAmount - savingAmount.innerText;

});

