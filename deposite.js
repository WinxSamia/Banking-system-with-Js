document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeId = document.getElementById('deposite-id');
    const newDepositeAmount = depositeId.value;
    const newDepositeAmountNum = parseFloat(newDepositeAmount);


    const prevDeposite = document.getElementById('d-deposite');
    const prevTotalDeposite = prevDeposite.innerText;
    const prevTotalDepositeNum = parseFloat(prevTotalDeposite);


    const currentAmount = prevTotalDepositeNum + newDepositeAmountNum;
    prevDeposite.innerText = currentAmount;


    const prevTotalAmount = document.getElementById('total-id');
    const prevTotalAmountString = prevTotalAmount.innerText;
    const prevTotalAmountNum = parseFloat(prevTotalAmountString);


    const Total = prevTotalAmountNum + newDepositeAmountNum;
    prevTotalAmount.innerText = Total;
    depositeId.value = '';





})