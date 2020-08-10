const { createGlobalStyle } = require("styled-components");


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        background-color: lightgrey;
    }
    .active-nav{
        border: 1px solid black;
        background-color: white;
        color: black;

        li{
            color: black !important;
        }
    }
`;
export default GlobalStyle;