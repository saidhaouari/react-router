import React from 'react';
import {Link} from 'react-router-dom'
function Nav(props) {
    return (
        <nav>
            <h2> The logo</h2>
            <ul className="navItems">
                <Link to='/about'><li>About </li></Link>
                <Link to='/shop'><li>Shop</li></Link>      
                </ul>
        </nav>
           
    );
}

export default Nav;