function checkName() {
    let firstName = document.querySelector('.first-name');
    let errorName = document.querySelector('.errorName');

    let noNumber = /\d/.test(firstName.value);
    let noSymbol = /\s/.test(firstName.value);

    if (noSymbol || noNumber || firstName.value.length < 2) {
        firstName.focus();
        errorName.innerHTML = 'Некоректное имя';
        firstName.classList.add('error');
    }
    else {
        firstName.classList.remove('error');
        errorName.innerHTML = '';
    }
}

function checkSurname() {
    let lastName = document.querySelector('.last-name');
    let errorLastName = document.querySelector('.errorLastName');

    let noNumber = /\d/.test(lastName.value);
    let noSymbol = /\s/.test(lastName.value)

    if (noSymbol || noNumber || lastName.value.length < 2) {
        lastName.focus();
        errorLastName.innerHTML = 'Некоректная фамилия';
        lastName.classList.add('error');
    }
    else {
        errorLastName.innerHTML = '';
        lastName.classList.remove('error');
    }
}

export {checkName, checkSurname}