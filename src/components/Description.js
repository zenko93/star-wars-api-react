import React from 'react';

export default function Description(props) {

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
        <div className='description'>
            <div className='keys'>
                {props.keys.map(item => renderKeys(item))}
            </div>
            <div className='values'>
                {props.values.map(item => renderValues(item))}
            </div>
        </div>
)
}

