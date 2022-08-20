document.getElementById('withdraw-btn').addEventListener('click', function () {

    const prevWithdrawAmount = document.getElementById('withdraw-box');
    const prevWithdrawAmountString = prevWithdrawAmount.innerText;
    const prevWithdrawAmountNum = parseFloat(prevWithdrawAmountString);


    const newWithrawAmount = document.getElementById('withdraw-id');
    const newWithrawAmountString = newWithrawAmount.value;
    const newWithrawAmountNew = parseFloat(newWithrawAmountString);


    const prevTotalAmount = document.getElementById('total-id');
    const prevTotalAmountString = prevTotalAmount.innerText;
    const prevTotalAmountNum = parseFloat(prevTotalAmountString);
    newWithrawAmount.value = '';

    if (newWithrawAmountNew > prevTotalAmountNum) {
        alert("Sorry, not enought balance");
        return;
    }
    const totalWithdraw = newWithrawAmountNew + prevWithdrawAmountNum;
    prevWithdrawAmount.innerText = totalWithdraw;


    const totalAmount = prevTotalAmountNum - newWithrawAmountNew;
    prevTotalAmount.innerText = totalAmount;



})