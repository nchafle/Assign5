import React from "react";
 
import classes from './Header.css';

const header = (props) => (
    <header className={classes.Header}>
        <h1>Indecision</h1>
        <h4>Put your life in the hands of a computer.</h4>
    </header>
);

export default header;