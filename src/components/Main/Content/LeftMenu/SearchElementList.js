import React from "react";

export default function SearchElementList (){

    const searchListData = () => {
        let search = document.querySelector('.search');

        let val = search.value.toLowerCase();
        let arrList = [];
        let list = document.querySelectorAll('.li');

        for (let i = 0; i < list.length; i++) {
            arrList.push(list[i].innerHTML.toLowerCase());
            list[i].hidden = !arrList[i].includes(val)
        }
    };

    return (
        <input className='search hidden' onInput={searchListData}/>
    )
}