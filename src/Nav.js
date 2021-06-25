import React from 'react';
import Logo from './logo.png';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

function Nav(props) {
    const style =
    {
        color : "white",
        textDecoration : 'none',
     
    }
    return (
        
        <nav>
            
            <div className="myLogo">
            <Link to="./"> <img src={Logo} alt=""/></Link>
                </div>
            <ul className="navItems">
                <Link to="./Bio"><Button style={style}>Bio</Button></Link>
                <Link to="./Contact"><Button style={style}>Contact</Button></Link>
                <Link to="./Project"><Button style={style}>Project</Button></Link>
            </ul>
        </nav>
           
    );
}

export default Nav;