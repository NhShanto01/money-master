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



    const savingInput = document.getElementById('save-input');
    const savingNumber = savingInput.value;
    savingInputTotal = parseFloat(savingNumber);
    savingInput.value = '';


    // saving amount

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;
    savingAmountBalance = parseFloat(savingAmountText);

    savingAmount.innerText = incomeInputTotal * savingInputTotal / 100;


    const balanceAmount = document.getElementById('total-balance');
    const balanceAmountText = balanceAmount.innerText;
    balanceTotalAmount = parseFloat(balanceAmountText);



    // remaining balance

    const ramainingAmount = document.getElementById('remaining-amount');
    const remainingAmountText = ramainingAmount.innerText;
    remainingTotalAmount = parseFloat(remainingAmountText);
    ramainingAmount.innerText = balanceTotalAmount - savingAmount.innerText;

});


// error massage

function accessValue() {
    const value1 = document.getElementById('income-input');
    const value2 = document.getElementById('food-input');
    const value3 = document.getElementById('rent-input');
    const value4 = document.getElementById('others-input');
    const value5 = document.getElementById('save-input');
    const addAmount = parseFloat(value2) + parseFloat(value3) + parseFloat(value4);

    if (typeof value1, value2, value3, value4, value5 == '') {
        const errorMsg = document.getElementById('permit-reject');
        errorMsg.style.display = 'block';
    }
    else {
        const errorMsg1 = document.getElementById('permit-accept');
        errorMsg1.style.display = 'block';

    }

    if (addAmount > value4) {
        const errorMsg2 = document.getElementById('low-money');
        errorMsg2.style.display = 'block';
    }



    if (value1, value2, value3, value4, value5 < 0) {
        const positiveValue = document.getElementById('positive-number');
        positiveValue.style.display = 'block';
    }


    if (value1, value2, value3, value4, value5 == 'string') {
        const errorMsgString = document.getElementById('positive-number');
        errorMsgString.style.display = 'block';
    }

};
