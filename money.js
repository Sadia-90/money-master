const salaryBox = document.getElementById("salary-box");
const foodBox = document.getElementById("Food-box");
const rentBox = document.getElementById("Rent-box");
const clothBox = document.getElementById("cloth-box");
const calculateBtn = document.getElementById("calculate-btn");

const expenseBox = document.getElementById("expenses-box");
const savings = document.getElementById("percentage");

const savingAmount = document.getElementById("Saving-box");
const remainingBalance = document.getElementById("Remaining-box");



document.getElementById("calculate-btn").addEventListener('click', function () {
    const salaryBox = document.getElementById("salary-box");
    // console.log(salaryBox);
    const totalIncome = salaryBox.value;
    // console.log(totalIncome);
    const incomeAmount = parseFloat(totalIncome);

    // total expenses
    const expenseBox = document.getElementById("expenses-box");
    const totalExpense = expenseBox.value;
    // console.log(expenseBox);
    const previousExpenseBox = parseFloat(totalExpense);

    const foodBox = document.getElementById("Food-box");
    const Food = foodBox.value;
    const foodExpense = parseFloat(Food);

    const rentBox = document.getElementById("Rent-box");
    const rent = rentBox.value;
    const rentExpense = parseFloat(rent);

    const clothBox = document.getElementById("cloth-box");
    const cloth = foodBox.value;
    const clothExpense = parseFloat(cloth);

    let totalExpenseAmount = foodExpense + rentExpense + clothExpense;

    // expenseBox.value = previousExpenseBox + incomeAmount;
    // console.log(value);

    let previousExpenseBox = incomeAmount - totalExpenseAmount;
    //   update balance

    //     const foodBox = document.getElementById("Food-box");
    //     const Food = foodBox.value;
    //     const foodExpense = parseFloat(Food);

    //     const rentBox = document.getElementById("Rent-box");
    //     const rent = rentBox.value;
    //     const rentExpense = parseFloat(rent);

    //     const clothBox = document.getElementById("cloth-box");
    //     const cloth = foodBox.value;
    //     const clothExpense = parseFloat(cloth);

    //     const totalExpenseAmount = foodExpense + rentExpense + clothExpense;

    salaryBox.value = '';
})
