import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import NavLinkStyle from '../../styles/NavLinkStyles';

const Navigation = () => {
    return (
        <NavLinkStyle>
            <NavLink exact to="/">
                <Nav>Home</Nav>
            </NavLink>
        </NavLinkStyle>
    )
}

export default Navigation;
