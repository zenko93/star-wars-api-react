import React,{useState} from 'react';
import useGetData from "./useGetData";
import Description from "./Description";


export default function RenderList(props) {
    const items = useGetData(props.dataIn);
    const [keys, setKeys] = useState();
    const [values, setValues] = useState();
    let list = document.getElementsByClassName('container-li');
    let arr = [];
    console.log(list)

    let checkItem = (target) => {
        items.forEach(item => {
            if(target.getAttribute('data-name') === item.name || target.id === item.name){
                setKeys(Object.keys(item));
                setValues(Object.values(item));
            }
        });
    };

    let handleClick = (event) => {
        let target = event.target;

        if(!target.hasAttribute('data-name')) {
            return;
        }
        checkItem(target)
    };

    let addDescription = () =>{
        if(keys) {
            return <Description keys={keys} values={values}/>
        }
    };

    let saveCheckedbox = () => {
        let checkedCheckBox = document.querySelectorAll('.checkbox');

        for (let i = 0; i < checkedCheckBox.length; i++) {
            if (checkedCheckBox[i].checked) {
                arr.push(checkedCheckBox[i]);
            }
        }
        console.log(arr)
    };

    let showElement = () => {
        let title = document.querySelector('.title')    ;

        title.classList.remove('hidden');
    };

    let addDescrWithCheckBox = (elem) => {
        let target = elem.target;

        if(target.checked){
           checkItem(target);
            arr.map(() => addDescription());
        }
    };


    let itemsList = items.map(item => (
        <div className='container-li' onClick={showElement}>
            <input type="checkbox" className='checkbox' onChange={addDescrWithCheckBox} id={item.name}/>
            <li data-name = {item.name} className='li' onClick={handleClick} key={item.name}>{item.name}</li>
        </div>
    ));

    return(
        <div className='content'>
            <div className='left-menu'>
                <ul>{itemsList}</ul>
            </div>
            <div className='right-menu'>
                <div className='title hidden'>DESCRIPTION</div>
                {addDescription()}
                {saveCheckedbox()}
            </div>
        </div>
    )
}


