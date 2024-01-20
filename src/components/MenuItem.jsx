import React from 'react';
import {Link} from "react-router-dom";

const MenuItem = (props) => {

    const error = () => {
        console.log("Error");
    }

    const IMG_URL = `https://starwars-visualguide.com/assets/img/categories/${props.name}.jpg`;

    return (
        <div className="menu__item">
            <Link to={`/${props.name}`}>
                <img src={IMG_URL} width={300} height={150} alt="Menu Item" />
                <div className="menu__text">{props.name}</div>
            </Link>
        </div>
    );
};

export default MenuItem;