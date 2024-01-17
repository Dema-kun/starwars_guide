import React from 'react';
import MenuItem from "./MenuItem";

const Menu = () => {
    const nameList = ['character', 'films', 'planets', 'species', 'starships', 'vehicles']

        return (
            <div>
                <div className="menu">
                    <MenuItem name={nameList[0]}/>
                    <MenuItem name={nameList[1]}/>
                    <MenuItem name={nameList[2]}/>
                    <MenuItem name={nameList[3]}/>
                    <MenuItem name={nameList[4]}/>
                    <MenuItem name={nameList[5]}/>
                </div>

            </div>
        );
};

export default Menu;