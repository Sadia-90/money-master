//  total input
const salaryBox = document.getElementById("salary-box");
const foodBox = document.getElementById("Food-box");
const rentBox = document.getElementById("Rent-box");
const clothBox = document.getElementById("cloth-box");
const savings = document.getElementById("percentage");


//    button
const calculateBtn = document.getElementById("calculate-btn");
const saveButton = document.getElementById("save-btn");

//    tag h1
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("total-balance");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");


function minus(num1, num2) {
    let Result = num1 - num2;
    return Result;
}

document.getElementById("calculate-btn").addEventListener('click', function (event) {
    event.preventDefault()

    let foodBox = document.getElementById("Food-box");
    let rentBox = document.getElementById("Rent-box");
    let clothBox = document.getElementById("cloth-box");
    const totalExpensesAmount = parseFloat(foodBox.value) + parseFloat(rentBox.value) + parseFloat(clothBox.value);
    console.log(totalExpensesAmount);

    totalExpenses.innerText = totalExpensesAmount;
    foodBox.value = '';
    rentBox.value = '';
    clothBox.value = '';

    let salaryBox = parseFloat(document.getElementById("salary-box").value);


    balance.innerText = minus(salaryBox, totalExpensesAmount);

    if (isNaN(totalExpensesAmount) || totalExpensesAmount < 0) {
        return alert('please input valid amount of money in number formet')
    }
})

saveButton.addEventListener('click', function (event) {
    event.preventDefault()
    const incomeTk = parseFloat(document.getElementById("salary-box").value);

    let saveTk = (incomeTk * savings.value) / 100;
    savingAmount.innerText = saveTk;

    let balanceTk = parseFloat(document.getElementById("total-balance").innerText);

    remainingBalance.innerText = minus(balanceTk, saveTk);
})


