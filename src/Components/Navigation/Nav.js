import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
    ul{
        list-style-type: none;
            margin: 0;
            padding: 0;
        li{
            text-align: center;
            color: white;
        }
    }
`;

function Nav(props) {
    return (
        <NavStyle>
            <ul>
                <li>{props.children}</li>
            </ul>
        </NavStyle>
    )
}

export default Nav;
