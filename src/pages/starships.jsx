import React from 'react';
import ItemList from "../components/ItemList";
import NavBar from "../components/navbar/NavBar";

const Starships = () => {
    return (
        <div className="character__h1">
            <div>
                <ItemList categories="starships"/>
            </div>
        </div>
    );
};

export default Starships;