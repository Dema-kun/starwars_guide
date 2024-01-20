import React from 'react';
import IMG_ERROR from "../assets/img/placeholder.jpg";

const Item = (props) => {

    const idFromUrl = (url) => {
        return url.split("/")[url.split("/").length - 2];
    }

    const categories = (cat) => (cat == "people") ? "characters" : props.categories

    const IMG_URL = `https://starwars-visualguide.com/assets/img/${categories(props.categories)}/${idFromUrl(props.id)}.jpg`;
    const IMG_ERROR = require('../assets/img/placeholder.jpg');

    return (
        <div className="item">
            <img src={IMG_URL} alt="Item" onError={({currentTarget}) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = IMG_ERROR;
                currentTarget.className = "item__img";
            }}/>
            <div className="item__title">{props.name}</div>
        </div>
    );
};

export default Item;