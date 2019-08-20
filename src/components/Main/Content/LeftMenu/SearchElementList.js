import React from "react";


export default function SearchElementList (){

    const searchListData = () => {
        let search = document.querySelector('.search');

        let val = search.value;
        let valLow = val.toLowerCase();
        let arrList = [];
        let list = document.querySelectorAll('.li');

        for (let i = 0; i < list.length; i++) {
            arrList.push(list[i].innerHTML.toLowerCase());
            !arrList[i].includes(valLow) ? list[i].hidden = true : list[i].hidden = false;
        }
    };

    return (
        <input className='search hidden' onInput={searchListData}/>
    )
}