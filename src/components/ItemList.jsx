import React, {useState} from 'react';
import Item from "./Item";
import axios from "axios";

const ItemList = (props) => {

    const API_URL = `https://swapi.dev/api/${props.categories}/`
    const [items, setItems] = useState([]);

    const fetchApi = async () => {
        await axios.get(API_URL).then((response) => {
            const results = response.data.results;
            for (let i = 0; i < results.length; i++) {
                setItems([...items, {id: i, name: results[i].name}])
                console.log(results[i].name)
                console.log(items)
            }
        })
    }


    return (
        <div className="item__list">
            <Item id={1} name={"Skywalker"}/>
            <button onClick={fetchApi}>Click</button>
        </div>
    );
};

export default ItemList;