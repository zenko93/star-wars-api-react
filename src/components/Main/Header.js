import React from "react";

export default function Header(props) {

    const search = document.getElementsByClassName('search');
    const menu = document.getElementsByClassName('menu');
    let targetName;

    const showElement = (element) => {
        element[0].classList.remove('hidden')
    };

    const selectUnderlineMenu = (target) => {
        for (let i = 0; i < menu.length; i++) {
            if (!target.classList.contains('sword-decoration')) {
                menu[i].classList.remove('sword-decoration')
            }
        }
        if (!target.classList.contains('sword-decoration')) {
            target.classList.add('sword-decoration');

        }
    };

    const senDataToParent = () => props.getDataFromChild(targetName);

    const handleClick = (event) => {
        const target = event.target;
        targetName = target.getAttribute('data-name');

        if (!targetName) {
            return;
        }
        showElement(search);
        selectUnderlineMenu(target);
        senDataToParent()
    };

    return (
        <header  className='menu' onClick={(event) => handleClick(event)}>
            <div className='menu people' data-name='people'>People</div>
            <div className='menu starships' data-name='starships'>Starships</div>
            <div className='menu planets' data-name='planets'>Planets</div>
        </header>
    )
}