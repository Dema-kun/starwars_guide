import React, {useEffect, useState} from 'react';
import classes from "./navbar.module.css";
import {Link} from "react-router-dom";

const NavBar = (props) => {

    const [page, setPage] = useState(1)
    const selectPage = () => {
      props.select(page);
    }

    useEffect(() => {
            selectPage();
        }, [page]
    )

    return (
        <div className={classes.navbar}>
            <div className={classes.nav_item}>
                <Link to={"/"} className={classes.link}>HOME / </Link>
                <div> {props.place}</div>
            </div>
            <div>
                {props.pageButton.map(p => <button onClick={() => setPage(p)}>{p}</button>
                )}
            </div>
        </div>
    );
};

export default NavBar;