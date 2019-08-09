
import React from 'react';

export default function Registration() {
    let errors = document.getElementsByClassName('errors');

    function popupUpHide(elem) {
        let backPopup = document.querySelector('.b-popup');
        let target = elem.target;

        if (target.className === 'b-popup' || target.className === 'close') {
            backPopup.classList.toggle('hidden');
        }
    }

    function checkErrors() {
        let childrenErr = errors[0].children;
        let backPopup = document.querySelector('.b-popup');

        let isFilled = true;
        checkName();
        checkSurname();
        checkEmail();
        checkPassword();
        checkConfirmPass();
        checkData();

        for (let i = 0; i < childrenErr.length; i++) {
            isFilled = isFilled && (childrenErr[i].innerHTML === '');
        }
        if (isFilled) {
            backPopup.classList.add('hidden');
        }
    }


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


    function checkEmail() {
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


    function checkPassword() {
        let pas = document.querySelector('.password');
        let errorPass = document.querySelector('.errorPass');

        let pasValue = pas.value;
        let number = /\d/.test(pasValue);
        let string = /\D/.test(pasValue);

        if (pasValue.length < 6 || !number || !string) {
            pas.focus();
            errorPass.innerHTML = 'Пороль должен содержать 6 символов из которых минимум 1 буква и 1 цифра.';
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
            errorConfirmPass.innerHTML = 'Пороль не совпадает';
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


    function checkData() {
        let date = document.querySelector('.birthday');
        let errorBirthday = document.querySelector('.errorBirthday');
        let dateArr = date.value.split('-');

        if (!isNaN(date.value)) {
            date.focus();
            errorBirthday.innerHTML = 'Заполните дату рождения';
            date.classList.add('error');
        }
        else if (dateArr[0] > 2019) {
            date.focus();
            date.classList.add('error');
            errorBirthday.innerHTML = 'Кажется вы ошиблись годом';
        }
        else {
            errorBirthday.innerHTML = '';
            date.classList.remove('error');
        }
    }
    return(
        <div className="b-popup hidden" onClick={e => popupUpHide(e)}>
            <div className="b-popup-content">
                <div className="title-reg">REGISTRATION</div>
                <button className="close">X</button>
                <form className="inputs">
                    <div className="errors">
                        <div className="errorName"> </div>
                        <div className="errorLastName"> </div>
                        <div className="errorEmail"> </div>
                        <div className="errorBirthday"> </div>
                        <div className="errorPass"> </div>
                        <div className="errorConfirmPass"> </div>
                    </div>
                    <input className="first-name" type="text" placeholder="FIRST NAME" autoFocus/>
                    <input className="last-name" type="text" placeholder="LAST NAME"/>
                    <input className="email" type="email" placeholder="EMAIL"/>
                    <input className="birthday" type="date" placeholder="BIRTHDATE"/>
                    <input className="password" type="password" placeholder="PASSWORD"/>
                    <input className="password-confirm" type="password" placeholder="PASSWORD CONFIRMATION"/>
                </form>
                <button className="confirm" onClick={checkErrors}>CONFIRM</button>
            </div>
        </div>
    )
}