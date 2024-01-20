import React from 'react';
import ItemList from "../components/ItemList";
import NavBar from "../components/navbar/NavBar";

const Vehicles = () => {
    return (
        <div className="character__h1">
            <div>
                <ItemList categories="vehicles"/>
            </div>
        </div>
    );
};

export default Vehicles;