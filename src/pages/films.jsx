import React from 'react';
import ItemList from "../components/ItemList";
import NavBar from "../components/navbar/NavBar";

const Films = () => {
    return (

        <div className="character__h1">
            <div>
                <ItemList categories="films"/>
            </div>

        </div>
    );
};

export default Films;