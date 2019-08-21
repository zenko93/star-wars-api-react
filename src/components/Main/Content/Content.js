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
            if(item){
                setKeys(oldKeys => [...oldKeys,Object.keys(item)]);
                setValues(oldValues => [...oldValues,Object.values(item)]);
            }
        }
        else {
            setValues( values.filter(item => target.id !== item[0]));
            setKeys(keys.filter((item, index) => index !== 0 ));
        }
    };

    return (
        <div className='content'>
            <LeftMenu dataIn={props.dataIn} onChangeCheckBox={onChangeCheckBox}/>
            <RightMenu keys={keys} values={values}/>
        </div>
    )
}


