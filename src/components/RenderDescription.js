import React from 'react';

export default function RenderDescription(props) {

    let renderKeys = (item) =>{
        if(item === 'films' || item === 'residents' || item === 'pilots' || item ==='vehicles') {
            return false;
        }
        return(
            <div>{item} :</div>
        )
    };


    let renderValues = (item) =>{
        if(item instanceof Array){
            return;
        }
        return(
            <div>{item}</div>
        )
    };


    return(
        <>
            { props.values[0] ?
            <div className='description'>
                <div className='keys'>
                    {props.keys.map(elemArr =>(<div className='blockKeysValues'>{elemArr.map(item => renderKeys(item))}</div> ))}
                </div>
                <div className='values'>
                    {props.values.map(elemArr =>(<div className='blockKeysValues'>{elemArr.map(item => renderValues(item))}</div> ))}
                </div>
            </div> : <div> </div>}
        </>
)
}

