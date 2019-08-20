import React from "react";

export default function Header(props) {

    const search = document.getElementsByClassName('search');
    const menu = document.getElementsByClassName('menu');

    let showElement = (element) => {
        element[0].classList.remove('hidden')
    };


    let selectUnderlineMenu = (target) => {
        console.log(target.classList);
        console.log(menu.length);

        for (let i = 0; i < menu.length; i++) {
            if (!target.classList.contains('sword-decoration')) {
                menu[i].classList.remove('sword-decoration')
            }
        }
        if (!target.classList.contains('sword-decoration')) {
            target.classList.add('sword-decoration');
        }

    };

    let handleClick = (event) => {
        let target = event.target;

        if (!target.hasAttribute('data-name')) {
            return;
        }
        showElement(search);
        selectUnderlineMenu(target);
    };

    const senDataToParent = (event) => {props.getDataFromChild(event.target.getAttribute('data-name'))};

    return (
        <header  className='menu'
                 onClick={(event) => {
                    handleClick(event);
                    senDataToParent(event);
        }}>
            <div className='menu people' data-name='people'>People</div>
            <div className='menu starships' data-name='starships'>Starships</div>
            <div className='menu planets' data-name='planets'>Planets</div>
        </header>
    )
}