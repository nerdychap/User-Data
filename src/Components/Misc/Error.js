import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.div`
    align-content: center;
    color: red;
    display: grid;
    height: 100vh;
    text-align: center;
`;
const ErrorMessage = styled.h1`
    text-transform: uppercase;
`;

function Error(props) {
    return (
        <ErrorStyle>
            <ErrorMessage>{props.error}</ErrorMessage>
        </ErrorStyle>
    )
}

export default Error
