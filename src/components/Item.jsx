import React from 'react';
import ImageItem from "./ImageItem";

const Item = (props) => {

    return (
        <div className="item">
            <ImageItem id={props.id} categories={props.categories} />
            <div className="item__title">{props.name}</div>
        </div>
    );
};

export default Item;