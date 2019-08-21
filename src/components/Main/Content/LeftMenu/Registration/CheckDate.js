export function checkDate() {
    let date = document.querySelector('.birthday');
    let errorBirthday = document.querySelector('.errorBirthday');
    let dateArr = date.value.split('-');
    let thisTime = new Date();

    if (!isNaN(date.value)) {
        date.focus();
        errorBirthday.innerHTML = 'Заполните дату рождения';
        date.classList.add('error');
    }
    else if (dateArr[0] > thisTime.getFullYear()) {
        date.focus();
        date.classList.add('error');
        errorBirthday.innerHTML = 'Кажется вы ошиблись годом';
    }
    else {
        errorBirthday.innerHTML = '';
        date.classList.remove('error');
    }
}