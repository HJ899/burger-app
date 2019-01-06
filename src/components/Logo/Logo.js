import React from 'react';
import BurgerLogo from '../../assets/images/127 burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="BurgerApp"></img>
    </div>
)

export default logo;