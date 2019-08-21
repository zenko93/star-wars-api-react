import React from 'react';

export default function RenderDescription(props) {

    const renderKeys = (item) =>{
        let arr = ['films','residents','pilots','vehicles'];
        return arr.includes(item)? false : <div>{item} :</div>;
    };

    const renderValues = (item) => item instanceof Array ? false : <div>{item}</div>;


    return(
        <div className='description'>
            {console.log(props.keys, props.values)}
            <div className='keys'>
                {props.keys.map(elemArr =>(<div className='blockKeysValues'>{elemArr.map(item => renderKeys(item))}</div> ))}
            </div>
            <div className='values'>
                {props.values.map(elemArr =>(<div className='blockKeysValues'>{elemArr.map(item => renderValues(item))}</div> ))}
            </div>
        </div>
)
}

