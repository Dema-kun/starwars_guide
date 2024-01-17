import React from 'react';

const Item = (props) => {

    const IMG_URL = `https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`;

    return (
        <div className="item">
            <img src={IMG_URL} alt="Item"/>
            <div className="item__title">{props.name}</div>
        </div>
    );
};

export default Item;