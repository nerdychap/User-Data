import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const NavLinkStyle = styled.nav`
    background-color: black;
    border-radius: 5px;
    color: white;
    margin: 1% auto;
    max-width: 1000px;
    width: 99%;

    a{
        display: block;
        padding: 1%;
        font-size: 20px;
        text-decoration: none;

    }

`;
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
