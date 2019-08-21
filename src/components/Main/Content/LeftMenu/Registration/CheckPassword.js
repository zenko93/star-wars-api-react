function checkPassword() {
    let pas = document.querySelector('.password');
    let errorPass = document.querySelector('.errorPass');

    let pasValue = pas.value;
    let number = /\d/.test(pasValue);
    let string = /\D/.test(pasValue);

    if (pasValue.length < 6 || !number || !string) {
        pas.focus();
        errorPass.innerHTML = 'Пароль должен содержать 6 символов из которых минимум 1 буква и 1 цифра.';
        pas.classList.add('error');
    }
    else {
        errorPass.innerHTML = '';
        pas.classList.remove('error');
    }
}


function checkConfirmPass() {
    let pas = document.querySelector('.password');
    let pasConfirm = document.querySelector('.password-confirm');
    let errorConfirmPass = document.querySelector('.errorConfirmPass');

    if (pas.value !== pasConfirm.value) {
        pasConfirm.focus();
        errorConfirmPass.innerHTML = 'Пароль не совпадает';
        pasConfirm.classList.add('error');
    }
    else if (pas.value === '') {
        pasConfirm.classList.add('error');
    }
    else {
        errorConfirmPass.innerHTML = '';
        pasConfirm.classList.remove('error');
    }
}

export {checkPassword, checkConfirmPass}