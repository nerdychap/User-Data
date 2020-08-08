import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from { 
        transform: rotateZ(0deg);
    }
    to{
        transform: rotateZ(360deg);
    }
`;
const LoaderStyle = styled.div`

    display: grid;
    justify-content: center;
    align-content: center;
    height: 100vh;
`;
const LoaderElement = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 10px solid black;
        border-bottom: 10px solid grey;
        animation: ${rotate} infinite 1s linear;
`;
function Loader() {
    return (
        <LoaderStyle>
            <LoaderElement />
        </LoaderStyle>
    )
}

export default Loader;
