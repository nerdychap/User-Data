import styled from 'styled-components';

const NavLinkStyle = styled.nav`
    background-color: black;
    color: white;
    margin: 1% auto;
    max-width: 1000px;
    width: 99%;
    transition: background-color .5s, color .5s;
    border: 1px solid black;
    &:hover{
        background-color: white;
        li{
            color: black;
        }
    }
    
    a{
        display: block;
        padding: 1%;
        font-size: 20px;
        text-decoration: none;

    }

`;

export default NavLinkStyle;