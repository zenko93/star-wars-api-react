import React, {useState} from 'react';
import RenderList from "./RenderList";
import Registration from "./Registration";


export default function Menu() {
    const [dataIn, setDataIn] = useState('');
    let search = document.getElementsByClassName('search');
    let menu = document.getElementsByClassName('menu');

    let showElement = (element) => {
        element[0].classList.remove('hidden')
    };

    let focusOnMenu = (target) => {
        console.log(target.classList);
        console.log(menu.length);

        for (let i = 0; i < menu.length; i++) {
            if(!target.classList.contains('sword-decoration')){
                menu[i].classList.remove('sword-decoration')
            }
        }
        if(!target.classList.contains('sword-decoration')){
            target.classList.add('sword-decoration');
        }

    };

    let handleClick = (event) => {
        let target = event.target;

        if(!target.hasAttribute('data-name')){
            return;
        }
        setDataIn(target.getAttribute('data-name'));
        showElement(search);
        focusOnMenu(target);
    };

    let searchListData = () => {
        let search = document.querySelector('.search');

        let val = search.value;
        let valLow = val.toLowerCase();
        let arrList = [];
        let list = document.querySelectorAll('.li');

        for (let i = 0; i < list.length ; i++) {
            arrList.push(list[i].innerHTML.toLowerCase());
            !arrList[i].includes(valLow) ? list[i].hidden = true: list[i].hidden = false;
        }
    };

    let regButtonClick = (elem) => {
        let backPopup = document.getElementsByClassName('b-popup');
        let target = elem.target;
        if (target.className !== 'reg-button'){
            return
        }
        backPopup[0].classList.remove('hidden');
    };


    return(
      <div className='main'>
          <header onClick={handleClick} className='menu'>
              <div className='menu people' data-name = 'people'>People</div>
              <div className='menu starships' data-name = 'starships'>Starships</div>
              <div className='menu planets' data-name = 'planets'>Planets</div>
          </header>
          <button className='reg-button' onClick={regButtonClick}>Registration</button>
          <input className='search hidden' onInput={searchListData}/>
          {dataIn ? <RenderList dataIn = {dataIn}/> : null}
          <Registration/>
      </div>
  );
}

