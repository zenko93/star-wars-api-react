import React, {useState} from 'react';
import RenderList from "./RenderList";
import Registration from "./Registration";


export default function Menu() {
    const [dataIn, setDataIn] = useState('');

    console.log(dataIn);

    let openList = (event) => {
        let target = event.target;

        if(!target.hasAttribute('data-name')){
            return;
        }
        setDataIn(target.getAttribute('data-name'));
    };

    let showElement = () => {
        let search = document.querySelector('.search');
        search.classList.remove('hidden')
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


    function regButtonClick(elem) {
        let backPopup = document.getElementsByClassName('b-popup');
        let target = elem.target;
        if (target.className !== 'reg-button'){
            return
        }
        backPopup[0].classList.remove('hidden');
    }


    return(
      <div className='main' onClick={showElement}>
          <header onClick={openList} className='menu'>
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

