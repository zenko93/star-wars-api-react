import RenderDescription from "./RenderDescription";
import React from "react";

export default function RightMenu (props) {


    return(
        <div className='right-menu'>
            <div className='title hidden'>DESCRIPTION</div>
            <RenderDescription keys={props.keys} values={props.values}/>
        </div>
    );
}