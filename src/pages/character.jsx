import React from 'react';
import ItemList from "../components/ItemList";

const Character = () => {



    return (
        <div>
            <div className="characters">
                <ItemList categories="people" />
            </div>
        </div>

    );
};

export default Character;