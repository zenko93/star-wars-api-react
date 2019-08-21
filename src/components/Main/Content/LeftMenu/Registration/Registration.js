
import React from 'react';
import {checkName, checkSurname} from './CheckNameAndSurname';
import {checkEmail} from './CheckEmail';
import {checkPassword, checkConfirmPass} from './CheckPassword';
import {checkDate} from './CheckDate'

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
        checkDate();

        for (let i = 0; i < childrenErr.length; i++) {
            isFilled = isFilled && (childrenErr[i].innerHTML === '');
        }
        if (isFilled) {
            backPopup.classList.add('hidden');
        }
    }


    let regButtonClick = (elem) => {
        let backPopup = document.getElementsByClassName('b-popup');
        let target = elem.target;
        if (target.className !== 'reg-button'){
            return
        }
        backPopup[0].classList.remove('hidden');
    };

    return(
        <div className='registration'>
            <button className='reg-button' onClick={regButtonClick}>Registration</button>
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
        </div>

    )
}