import React from "react";
import useGetData from "../../../useGetData";

export default function RenderList (props) {
    const items = useGetData(props.dataIn);

    let showElement = () => {
        let title = document.querySelector('.title');
        title.classList.remove('hidden');
    };

    return (
        <ul>
            {items.map(item => (
                <div className='container-li' key={item.name} onClick={showElement}>
                    <label className='li'>
                        <li key={item.name} className='li' data-name={item.name}>
                            <input type="checkbox" id={item.name} className='checkbox' onChange={(event) => {
                                props.onChangeCheckBox(event)
                            }}/>
                            <span className='li'>{item.name}</span>
                        </li>
                    </label>
                </div>
            ))}
        </ul>
    );
}
