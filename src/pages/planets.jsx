import React from 'react';
import ItemList from "../components/ItemList";
import NavBar from "../components/navbar/NavBar";

const Planets = () => {
    return (
        <div className="character__h1">
            <div>
                <ItemList categories="planets"/>
            </div>
        </div>
    );
};

export default Planets;