import React from 'react';
import ItemList from "../components/ItemList";
import NavBar from "../components/navbar/NavBar";

const Character = () => {



    return (
        <div>
            <NavBar place={"Characters"}/>
            <div className="characters">
                <ItemList categories="people"/>
            </div>
        </div>

    );
};

export default Character;