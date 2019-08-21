export function checkEmail() {
    let email = document.querySelector('.email');
    let errorEmail = document.querySelector('.errorEmail');

    if (!email.value.includes('@')) {
        email.focus();
        errorEmail.innerHTML = 'Некоректная почта';
        email.classList.add('error');
    }
    else {
        errorEmail.innerHTML = '';
        email.classList.remove('error');
    }
}