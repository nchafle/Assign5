import classes from './MainButton.css';
import React from "react";

const mainButton = (props) => (
    <div className={classes.MainButton}>
        <button onClick={props.clicked}>What should I do?</button>
    </div>
);

export default mainButton;