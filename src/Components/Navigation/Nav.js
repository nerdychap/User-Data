import React from 'react';
import NavStyle from '../../styles/NavStyles';


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
