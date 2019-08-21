import React from "react";
import RenderList from "./RenderList";
import Registration from "./Registration/Registration";
import SearchElementList from "./SearchElementList";

export default function LeftMenu (props) {

    return (
        <div className='left-menu'>
            <Registration/>
            <SearchElementList/>
            <div className='list'>
                <RenderList dataIn={props.dataIn} onChangeCheckBox={props.onChangeCheckBox}/>
            </div>
        </div>
    );
}