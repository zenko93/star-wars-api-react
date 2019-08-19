import React, {useState, useReducer} from 'react';
import useGetData from "./useGetData";
import RenderDescription from "./RenderDescription";


export default function RenderList(props) {
    const items = useGetData(props.dataIn);
    const [keys, setKeys] = useState([]);
    const [values, setValues] = useState([]);
    // const [arr, setArr] = useState([]);



    let onChangeCheckBox = (elem) => {
        let target = elem.target;
        let item;

        if (target.checked) {
            // setArr(oldArr =>[...oldArr ,items.find((item) => item.name === target.id)]);
            item = items.find((item) => item.name === target.id);
            setKeys(oldKeys => [...oldKeys,Object.keys(item)]);
            setValues(oldValues => [...oldValues,Object.values(item)]);
        }
        else {
            setValues( values.filter( () => {
                let findArr = values.findIndex(item => target.id === item[0]);
                values.splice(findArr, 1);
                console.log(findArr)
                return values
            }));
            setKeys( keys.filter( () => {
                // let findArr = keys.findIndex(item => target.id === item[0]);
                keys.pop();
                console.log(keys)
                return keys
            }));
            console.log(values)
        }
    };



    let showElement = () => {
        let title = document.querySelector('.title');
        title.classList.remove('hidden');
    };



    let itemsList = items.map(item => (
        <div className='container-li' onClick={showElement} key={item.name}>
            <label className='li'>
                <li key={item.name} className='li' data-name={item.name}>
                    <input type="checkbox" id={item.name} className='checkbox' onChange={onChangeCheckBox}/>
                    <span className='li'>{item.name}</span>
                </li>
            </label>
        </div>
    ));


    return (
        <div className='content'>
            <div className='left-menu'>
                <ul>{itemsList}</ul>
            </div>
            <div className='right-menu'>
                <div className='title hidden'>DESCRIPTION</div>
                <RenderDescription keys={keys} values={values}/>
            </div>
        </div>
    )
}


