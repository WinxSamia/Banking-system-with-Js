document.getElementById('submit-btn').addEventListener('click', function () {

    const email1 = document.getElementById('emailid');
    const email = email1.value;

    const password1 = document.getElementById('passwordiid');
    const password = password1.value;
    if (email === 'admin@gmail.com' && password === 'bleh')
        window.location.href = 'bank.html';
    else
        alert('invalid user');

})