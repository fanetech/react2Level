import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to={"/home"} >Accueil</Link></li>
                <li><Link to={"/service"} >Services</Link></li>
                <li><Link to={"/contact"} >Contact</Link></li>
            </ul>            
        </header>
    );
};

export default Header;