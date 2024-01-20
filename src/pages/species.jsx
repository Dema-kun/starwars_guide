import React from 'react';
import ItemList from "../components/ItemList";
import NavBar from "../components/navbar/NavBar";

const Species = () => {
    return (
        <div className="character__h1">
            <div>
                <ItemList categories="species"/>
            </div>
        </div>
    );
};

export default Species;