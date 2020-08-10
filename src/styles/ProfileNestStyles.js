const { default: styled } = require("styled-components");

const TabWrapper = styled.article`
    display: grid;
    nav{
        margin: 0 auto;
        border-radius: initial;
        border: 1px solid white;
        &:hover{
            border: 1px solid black;
        }
    }
    li{
        font-size: 16px;
    }
    a{
        width: 100
    }
    @media screen and (min-width: 768px){
        display: flex;
    }
`;

export default TabWrapper;