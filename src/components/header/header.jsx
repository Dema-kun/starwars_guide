import React from 'react';
import cl from './header.module.css'

const Header = () => {
    return (
        <div className={cl.header}>
            <div className={cl.logo}>STAR</div>
            <div className={cl.title}>GUIDE</div>
            <div className={cl.logo}>WARS</div>
        </div>
    );
};

export default Header;