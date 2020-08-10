const { default: styled } = require("styled-components");

const NoMatchWrapper = styled.div`
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h1{
        color: red;
        text-transform: uppercase;
    }
`;

export default NoMatchWrapper;
