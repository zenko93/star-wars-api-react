import React, {useState} from 'react';
import Header from "./Header";
import Content from "./Content/Content";


export default function Menu() {
    const [dataIn, setDataIn] = useState();

    const getDataFromChild = (data) => {
        setDataIn(data);
    };

    return(
      <main className='main'>
          <Header getDataFromChild={getDataFromChild}/>
          <Content dataIn = {dataIn}/>
      </main>
  );
}

