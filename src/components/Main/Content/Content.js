import React, {useState} from 'react';
import useGetData from "../../useGetData";
import LeftMenu from "./LeftMenu/LeftMenu";
import RightMenu from "./RightMenu/RightMenu";



export default function Content(props) {
    const items = useGetData(props.dataIn);

    const [keys, setKeys] = useState([]);
    const [values, setValues] = useState([]);

    let onChangeCheckBox = (elem) => {
        let target = elem.target;
        let item;

        if (target.checked) {
            item = items.find((item) => item.name === target.id);
            setKeys(oldKeys => [...oldKeys,Object.keys(item)]);
            setValues(oldValues => [...oldValues,Object.values(item)]);
        }
        else {
            setValues( values.filter( () => {
                let findArr = values.findIndex(item => target.id === item[0]);
                values.splice(findArr, 1);
                return values
            }));
            setKeys( keys.filter( () => {
                keys.pop();
                return keys
            }));
        }
        console.log(item)
    };

    return (
        <div className='content'>
            <LeftMenu dataIn={props.dataIn} onChangeCheckBox={onChangeCheckBox}/>
            <RightMenu keys={keys} values={values}/>
        </div>
    )
}


