import styled from "styled-components";
import { rotate } from './Animations';


const LoaderStyle = styled.div`

    display: grid;
    justify-content: center;
    align-content: center;
    height: 50vh;
`;
export const LoaderElement = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 10px solid black;
        border-bottom: 10px solid grey;
        border-top: 10px solid grey;
        animation: ${rotate} infinite 1s linear;
`;

export default LoaderStyle;