import {useState, useEffect} from 'react';

export default function useGetData(dataIn) {
    const [items, setItems] = useState([]);

useEffect(() => {
    if (dataIn){
        fetch(`https://swapi.co/api/${dataIn}`)
            .then(response => response.json())
            .then(data => setItems(data.results))
            .catch(error => console.log('Request failed', error));
    }
},[dataIn]);

return items;
}
