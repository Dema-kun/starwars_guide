import React from 'react';
import classes from "./navbar.module.css";
import {Link} from "react-router-dom";

const NavBar = (props) => {

    console.log(props.place)
    return (
        <div className={classes.navbar}>
            <div className={classes.nav_item}>
                <Link to={"/"} className={classes.link}>HOME / </Link>
                <div> {props.place}</div>
            </div>
            <div>World</div>
        </div>
    );
};

export default NavBar;